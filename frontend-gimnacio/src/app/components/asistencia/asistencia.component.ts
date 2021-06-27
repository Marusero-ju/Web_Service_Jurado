import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';

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

  constructor(private toastr: ToastrService,
    private router: Router,
    private alumnoService: AlumnoService,
    private asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.cargarAsistencias();
    this.alumnos = new Array<Alumno>();
    this.cargarAlumnos();
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
