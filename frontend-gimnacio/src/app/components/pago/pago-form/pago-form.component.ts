import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent implements OnInit {

  pago: Pago;
  alumnos: Array<Alumno>;

  constructor(private router: Router,
              private pagoService: PagoService,
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
    this.pago = new Pago();
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

  agregarPago(form: NgForm):void{
    this.pagoService.addPago(this.pago).subscribe(
      result=>{
        console.log("Pago ", result)
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
    this.pago = new Pago();
  }

  cancelar(){
    this.router.navigate(['home']);
  }

}
