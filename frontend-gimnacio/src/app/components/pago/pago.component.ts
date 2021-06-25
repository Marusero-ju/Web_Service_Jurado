import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { PagoService } from 'src/app/services/pago.service';
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

  constructor(private pagoService: PagoService,
              private toastr: ToastrService,
              private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarPagos();
    this.mostrar_pago = false;
    this.alumnos = new Array<Alumno>();
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.alumnoService.getAlumnos().subscribe(
      result=>{
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
