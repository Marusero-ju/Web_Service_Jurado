import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  planes: Array<Plan>;

  constructor(private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregarPlan(){
    this.router.navigate(["plan-form"]);
  }

}
