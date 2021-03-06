import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { LoginService } from 'src/app/services/login.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  asistencia: Asistencia;
  asistencias: Array<Asistencia>;
  mostrar_asistencia: boolean;
  alumno: Alumno;
  alumnos: Array<Alumno>;
  asistenciaJSON: JSON;

  constructor(private toastr: ToastrService,
    private router: Router,
    private alumnoService: AlumnoService,
    private asistenciaService: AsistenciaService,
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
    this.cargarAsistencias();
    this.alumnos = new Array<Alumno>();
    this.cargarAlumnos();
  }

  imprimirTabla(){
    printJS({
      printable: this.asistenciaJSON,
      properties: [
        { field:'apellido',displayName:'Apellido'},
        { field:'nombre',displayName:'Nombre'},
        { field:'fecha',displayName:'Fecha'}],
      header: '<h2 class="titulo">Tabla de asistencias</h2>',
      style: '.titulo{font: arial bold 30px; text-align: center;}',
      gridHeaderStyle: 'border: 1px solid black;',
      gridStyle: 'border: 1px solid black; text-align: center;',
      documentTitle: 'Asistencias de alumnos',
      type: 'json'
    })
  }

  cargarAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnos().subscribe(
      result => {
        this.asistenciaJSON = result;
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

  cargarAsistencias():void {
    this.asistencias = new Array<Asistencia>();
    this.asistenciaService.getAsistencias().subscribe(
      result =>{
        result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia, element);
          this.asistencias.push(vAsistencia);
        });
      },
      error => {
        console.log(error);
        this.toastr.warning('Error en el server al cargar las Asistencias');
      }

    )
  }




}
