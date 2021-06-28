import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import * as printJS from 'print-js';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Alumno;
  alumnos: Array<Alumno>;
  alumnoJSON: JSON;

  constructor(private toastr: ToastrService,
    private router: Router,
    private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  imprimirTabla(){
    printJS({
      printable: this.alumnoJSON,
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
      type: 'json'
    })
  }

  cargarAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnos().subscribe(
      result => {
        this.alumnoJSON = result;
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

  seleccionarAlumno(alumno: Alumno){
    console.log("Alumno ", alumno)
    this.alumnoService.getAlumno(alumno._id).subscribe(
      result =>{
        this.alumno = result;
        this.toastr.success('OK');
        this.router.navigate(['alumno-form',this.alumno])
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  eliminarAlumno(alumno: Alumno):void{
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Realmente desea eliminar al alumno?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar ahora!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnoService.deleteAlumno(alumno).subscribe(
          result=>{
            console.log(result.msg);
            this.cargarAlumnos();
            this.toastr.success(result.msg);
          },
          error=>{
            console.log(error);
            this.toastr.error(error);
          }
        );
        Swal.fire(
          'Borrado!',
          'El alumno se ha borrado.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se borrado al alumno',
          'error'
        )
      }
    });
  }

}
