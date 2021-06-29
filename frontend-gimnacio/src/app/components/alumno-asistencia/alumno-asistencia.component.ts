import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-asistencia',
  templateUrl: './alumno-asistencia.component.html',
  styleUrls: ['./alumno-asistencia.component.css']
})
export class AlumnoAsistenciaComponent implements OnInit {

  control : Alumno;
  controlJSON: JSON;

  constructor() { }

  ngOnInit(): void {
  }

  imprimirTabla(){
    printJS({
      printable: this.controlJSON,
      properties: [
        { field:'nombre',displayName:'Nombre'},
        { field:'apellido',displayName:'Apellido'},
        { field:'dni',displayName:'DNI'},
        { field:'fecha_nacimiento',displayName:'Fecha de Nacimiento'},
        { field:'celular',displayName:'Celular'},
        { field:'domicilio',displayName:'Domicilio'},
        { field:'email',displayName:'Email'},
        { field:'fecha_inicio',displayName:'Fecha de Inicio'},
        { field:'plan.nombre',displayName:'Plan'}],
      header: '<h2 class="titulo">Tabla de alumnos registrados</h2>',
      style: '.titulo{font: arial bold 30px; text-align: center;}',
      gridHeaderStyle: 'border: 1px solid black;',
      gridStyle: 'border: 1px solid black; text-align: center;',
      documentTitle: 'Registro completo de alumnos',
      type: 'json'
    })
  }


}
