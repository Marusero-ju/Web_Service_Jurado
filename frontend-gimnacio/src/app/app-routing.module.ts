import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoFormComponent } from './components/alumno/alumno-form/alumno-form.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PagoFormComponent } from './components/pago/pago-form/pago-form.component';
import { PagoComponent } from './components/pago/pago.component';
import { LoginComponent } from './components/login/login.component';
import { PlanFormComponent } from './components/plan/plan-form/plan-form.component';
import { PlanComponent } from './components/plan/plan.component';
import { AsistenciaFormComponent } from './components/asistencia-form/asistencia-form.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { CardentrenamientoComponent } from './components/cardentrenamiento/cardentrenamiento.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumno-table', component: AlumnoComponent},
  {path: 'alumno-form', component: AlumnoFormComponent},
  {path: 'pago-table', component: PagoComponent},
  {path: 'pago-form', component: PagoFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plan-table', component: PlanComponent},
  {path: 'plan-form', component: PlanFormComponent},
  {path: 'plan-form/:plan', component: PlanFormComponent},
  {path: 'asistencia-form', component: AsistenciaFormComponent},
  {path: 'entrenamiento', component: CardentrenamientoComponent},
  {path: 'asistencia', component: AsistenciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
