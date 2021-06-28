import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { SlideComponent } from './components/slide/slide.component';
import { AlumnoFormComponent } from './components/alumno/alumno-form/alumno-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagoComponent } from './components/pago/pago.component';
import { PagoFormComponent } from './components/pago/pago-form/pago-form.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule } from 'angular-9-datatable';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlanFormComponent } from './components/plan/plan-form/plan-form.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AsistenciaFormComponent } from './components/asistencia-form/asistencia-form.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HeaderdefaultComponent } from './components/layout/headerdefault/headerdefault.component';
import { CardentrenamientoComponent } from './components/cardentrenamiento/cardentrenamiento.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { FormImpComponent } from './components/form-imp/form-imp.component';
import { FacebookModule } from 'ngx-fb';
import { PublicComponent } from './components/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AlumnoComponent,
    SlideComponent,
    AlumnoFormComponent,
    MenuComponent,
    NavbarComponent,
    PagoComponent,
    PagoFormComponent,
    LoginComponent,
    PlanComponent,
    PlanFormComponent,
    AsistenciaComponent,
    AsistenciaFormComponent,
    PruebaComponent
    HeaderdefaultComponent,
    CardentrenamientoComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    FormImpComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgxDataTableModule,
    FacebookModule.forRoot(),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
