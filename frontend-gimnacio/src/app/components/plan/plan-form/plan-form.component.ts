import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router,
              private planService: PlanService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.plan = new Plan();
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

  limpiarFormulario(form: NgForm):void{
    form.reset();
    this.plan = new Plan();
  }

  cancelar(){
    this.router.navigate(['plan-table']);
  }

}
