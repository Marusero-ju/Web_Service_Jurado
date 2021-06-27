import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario;
  alumnos: Array<Alumno>;
  mostrar_boton: boolean;
  alumno: Alumno;
  password: string;

  constructor(private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService,
    private alumnoService: AlumnoService,
    private rutaActiva: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.alumno = new Alumno();
    this.cargarAlumnos();
    if(this.rutaActiva.params['value']._id === undefined){
      this.mostrar_boton = false;  
    }else{
      this.mostrar_boton = true;
      console.log("Usuario",this.rutaActiva.params)
      this.cargarUsuario(this.rutaActiva.params['value']._id);
      
    }
  }

  cargarAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnos().subscribe(
      result => {
        result.forEach(element => {
          let vAlumno= new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
        }
        )},
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  cargarUsuario(id: string){
    //llamar al service para cargar un sector
    this.usuarioService.getUsuario(id).subscribe(
      result=>{
        Object.assign(this.usuario, result);
        console.log(this.usuario);
      },
      error=>{
        console.log('Error', error);
      }
    );
  }

  agregarUsuario(form: NgForm):void{
    this.alumno = this.alumnos.find(a=>(a._id == this.alumno._id))
    this.usuario.apellido = this.alumno.apellido;
    this.usuario.nombres = this.alumno.nombre;
    this.usuarioService.addUsuario(this.usuario).subscribe(
      result=>{
        console.log("Usuario ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['usuario-table']);
        }else{
          this.toastr.error(result.msg);
          form.reset
        }
        console.log(result)
      },
      error=>{
        this.toastr.error(error);
      }
    )
  }

  modificarUsuario():void{
    this.usuarioService.updateUsuario(this.usuario).subscribe(
      result=>{
        if(result.status == "1"){
          this.toastr.success(result.msg);
          this.router.navigate(['usuario-table']);
        }else{

        }
        console.log(result)
      },
      error=>{
        console.log(error);
      }
    )
  }

  limpiarFormulario(form: NgForm):void{
    this.usuario = new Usuario();
    form.reset();
  }

  cancelar(){
    this.router.navigate(['usuario-table']);
  }

}
