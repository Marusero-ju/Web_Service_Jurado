import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Alumno;
  alumnos: Array<Alumno>;

  constructor(private toastr: ToastrService,
    private router: Router,
    private alumnoService: AlumnoService,
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
