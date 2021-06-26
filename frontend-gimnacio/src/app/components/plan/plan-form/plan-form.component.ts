import { ViewFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  plan: Plan;
  mostrar_boton: boolean;

  constructor(private router: Router,
              private planService: PlanService,
              private toastr: ToastrService,
              private rutaActiva: ActivatedRoute) {
                // console.log(this.rutaActiva.params['value']._id)
                // if(this.rutaActiva.params['value']._id === undefined){
                //   console.log("VACIO")
                // }
              }

  ngOnInit(): void {
    
    this.plan = new Plan();
    if(this.rutaActiva.params['value']._id === undefined){
      this.mostrar_boton = false;  
    }else{
      this.mostrar_boton = true;
      this.plan.nombre = this.rutaActiva.params['value'].nombre;
      this.plan._id = this.rutaActiva.params['value']._id;
      this.plan.costo = this.rutaActiva.params['value'].costo;
      this.plan.detalles = this.rutaActiva.params['value'].detalles;
      this.plan.frecuencia = this.rutaActiva.params['value'].frecuencia;
    }
  }

  agregarPlan(form: NgForm):void{
    this.planService.addPlan(this.plan).subscribe(
      result=>{
        console.log("Plan ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['plan-table']);
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

  modificarPlan(){
    this.planService.updatePlan(this.plan).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success(result.msg);
          this.router.navigate(['plan-table']);
        }else{
          this.toastr.error(result.msg);
        }
      },
      error => {
        this.toastr.warning(error);
      }
    );

  }

  limpiarFormulario(form: NgForm):void{
    this.plan = new Plan();
    form.reset();
  }

  cancelar(){
    this.router.navigate(['plan-table']);
  }

}
