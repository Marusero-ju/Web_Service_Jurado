import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-asistencia-form',
  templateUrl: './asistencia-form.component.html',
  styleUrls: ['./asistencia-form.component.css']
})
export class AsistenciaFormComponent implements OnInit {

  asistencia: Asistencia;
  alumnos: Array<Alumno>;

  constructor(private router: Router,
              private asistenciaService: AsistenciaService,
              private alumnoService: AlumnoService,
              private toastr: ToastrService,
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
    this.asistencia = new Asistencia();
    this.alumnos = new Array<Alumno>();
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

  agregarAsistencia(form: NgForm):void{
    this.asistenciaService.addAsistencia(this.asistencia).subscribe(
      result=>{
        console.log("Asistencia ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['home']);
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
    form.reset();
    this.asistencia = new Asistencia();
  }

  cancelar(){
    this.router.navigate(['home']);
  }







}
