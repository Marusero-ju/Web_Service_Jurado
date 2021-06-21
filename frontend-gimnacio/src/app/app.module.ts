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
    PagoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
