import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import { PagoService } from 'src/app/services/pago.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  pago: Pago;
  pagos: Array<Pago>;
  mostrar_pago: boolean;
  alumnos: Array<Alumno>;
  pagoJSON: JSON;

  constructor(private pagoService: PagoService,
              private toastr: ToastrService,
              private alumnoService: AlumnoService,
              private loginService: LoginService,
              private router: Router) { 
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
    this.cargarPagos();
    this.mostrar_pago = false;
    this.alumnos = new Array<Alumno>();
    this.cargarAlumnos();
  }

  imprimirTabla(){
    printJS({
      printable: this.pagoJSON,
      properties: [
        { field:'apellido',displayName:'Apellido'},
        { field:'nombre',displayName:'Nombre'},
        { field:'monto',displayName:'Monto'},
        { field:'fecha_pago',displayName:'Fecha de Pago'},
        { field:'fecha_vencimiento',displayName:'Fecha de Vencimiento'},
        { field:'fecha_nacimiento',displayName:'Fecha de Nacimiento'},
        { field:'forma_pago',displayName:'Forma de Pago'}],
      header: '<h2 class="titulo">Tabla de Pagos</h2>',
      style: '.titulo{font: arial bold 30px; text-align: center;}',
      gridHeaderStyle: 'border: 1px solid black;',
      gridStyle: 'border: 1px solid black; text-align: center;',
      documentTitle: 'Pagos Alumnos',
      type: 'json'
    })
  }

  cargarAlumnos(){
    this.alumnoService.getAlumnos().subscribe(
      result=>{
        this.pagoJSON = result;
        result.forEach(element => {
          let vAlumno= new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
        });
        //this.toastr.success(result.msg);

      },
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  cargarPagos():void {
    this.pagos = new Array<Pago>();
    this.pagoService.getPagos().subscribe(
      result =>{
        result.forEach(element => {
          let vPago = new Pago();
          Object.assign(vPago, element);
          this.pagos.push(vPago);
        });
      },
      error => {
        console.log(error);
        this.toastr.warning('Error en el server al cargar los Pagos');
      }

    )
  }

  seleccionarPago(pago: Pago){
    console.log("Estoy entando en mostrar Pago", this.mostrar_pago)
    console.log("Pago ", pago)
    this.pagoService.getPago(pago._id).subscribe(
      result =>{
        this.pago = result;
        this.pago.alumno = this.alumnos.find(a=>(a._id == this.pago.alumno._id));
        this.toastr.success('OK');
        this.mostrar_pago = true;
        console.log("Valor mostrar_pago",this.mostrar_pago)
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  modificarPago(form: NgForm){
    console.log("Pasaje Modificar",this.pago);

    this.pagoService.updatePago(this.pago).subscribe(
      result=>{
        this.toastr.success(result.msg);
        console.log('Pago actualizado');
        this.pago = new Pago();
        this.cargarPagos();
        form.reset();
      },
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
    this.mostrar_pago=false;
  }

  cancelar(form: NgForm){
    form.reset();
    this.mostrar_pago=false;
  }

}
