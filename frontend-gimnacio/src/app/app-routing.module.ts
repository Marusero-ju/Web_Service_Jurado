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
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { PublicComponent } from './components/public/public.component';
import { CardFormComponent } from './components/cardentrenamiento/card-form/card-form.component';
import { CardTableComponent } from './components/cardentrenamiento/card-table/card-table.component';
import { NosotrosComponent } from './components/layout/nosotros/nosotros.component';
import { HomeinicioComponent } from './components/homeinicio/homeinicio.component';

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
  {path: 'entrenamiento-form', component: CardFormComponent},
  {path: 'entrenamiento-table', component: CardTableComponent},
  {path: 'asistencia', component: AsistenciaComponent},
  {path: 'usuario-table', component: UsuariosComponent},
  {path: 'usuario-form', component: UsuarioFormComponent},
  {path: 'posteo', component: PublicComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'home-inicio', component: HomeinicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
