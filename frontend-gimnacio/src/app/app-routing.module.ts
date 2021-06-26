import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoFormComponent } from './components/alumno/alumno-form/alumno-form.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PagoFormComponent } from './components/pago/pago-form/pago-form.component';
import { PagoComponent } from './components/pago/pago.component';
import { LoginComponent } from './components/login/login.component';
import { PlanFormComponent } from './components/plan/plan-form/plan-form.component';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alumno-form', component: AlumnoFormComponent},
  {path: 'pago-table', component: PagoComponent},
  {path: 'pago-form', component: PagoFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plan-table', component: PlanComponent},
  {path: 'plan-form', component: PlanFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
