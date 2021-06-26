import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  plan: Plan;
  planes: Array<Plan>;

  constructor(private toastr: ToastrService,
              private router: Router,
              private servicePlan: PlanService) { }

  ngOnInit(): void {
    this.cargarPlanes();
  }

  agregarPlan(){
    this.router.navigate(["plan-form"]);
  }

  cargarPlanes(){
    this.planes = new Array<Plan>();
    this.servicePlan.getPlanes().subscribe(
      result => {
        result.forEach(element => {
          let vPlan= new Plan();
          Object.assign(vPlan,element);
          this.planes.push(vPlan);
        }
        )},
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  seleccionarPlan(plan: Plan){
    console.log("Pago ", plan)
    this.servicePlan.getPlan(plan._id).subscribe(
      result =>{
        this.plan = result;
        this.toastr.success('OK');
        this.router.navigate(['plan-form',this.plan])
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  eliminarPlan(plan: Plan):void{
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Realmente desea eliminar el plan?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar ahora!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicePlan.deletePlan(plan).subscribe(
          result=>{
            console.log(result.msg);
            this.cargarPlanes();
            this.toastr.success(result.msg);
          },
          error=>{
            console.log(error);
            this.toastr.error(error);
          }
        );
        Swal.fire(
          'Borrado!',
          'El plan se ha borrado.',
          'success'
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se borrado el plan',
          'error'
        )
      }
    });
  }

}
