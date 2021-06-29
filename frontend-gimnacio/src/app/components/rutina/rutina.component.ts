import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Rutina } from 'src/app/models/rutina';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  rutina: Rutina;
  alumnos: Array<Alumno>;
  mostrar_boton: boolean;

  constructor(private rutinaService: RutinaService,
              private alumnoService: AlumnoService,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) { 
    if(this.loginService.userLoggedIn()){ 
      //acciones normales de componente 
      //acciones normales de componente 
    } 
    else { 
      alert("Debe validarse e ingresar su usuario y clave"); 
      this.router.navigate(['login']); 
    }
  }

  ngOnInit(): void {
    this.rutina = new Rutina();
    this.cargarAlumnos();
  }

  cargarAlumnos():void {
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnos().subscribe(
      result =>{
        result.forEach(element => {
          let vAlumno = new Alumno();
          Object.assign(vAlumno, element);
          this.alumnos.push(vAlumno);
        });
      },
      error => {
        console.log(error);
        this.toastr.warning('Error en el server al cargar los Alumnos');
      }
      
    )
  }

  agregarRutina(form: NgForm):void{
    this.rutinaService.addRutina(this.rutina).subscribe(
      result=>{
        console.log("Alumno ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['alumno-table']);
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

  limpiarFormulario(form: NgForm):void{
    this.rutina = new Rutina();
    form.reset();
  }

  cancelar(){
    this.router.navigate(['home-inicio']);
  }

}
