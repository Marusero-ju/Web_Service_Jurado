import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userform: Usuario = new Usuario(); //usuario mapeado al formulario
  returnUrl: string;
  msglogin: string; // mensaje que indica si no paso el loguin

  mostrar_password: boolean;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private loginService:LoginService){
 }

 ngOnInit() {
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/entrenamiento';
  this.mostrar_password = false;
 }

 login(form: NgForm) {
  this.loginService.login(this.userform.username, this.userform.password)
  .subscribe(

    (result) => {
      var user = result;
      if (user.status == 1){
      //guardamos el user en cookies en el cliente
      sessionStorage.setItem("user", user.username);
      sessionStorage.setItem("userid", user.userId);
      sessionStorage.setItem("perfil", user.perfil);
      //redirigimos a home o a pagina que llamo
      this.router.navigateByUrl(this.returnUrl);
      window.location.href = 'http://localhost:4200/entrenamiento';
      // this.router.navigate(['entrenamiento']);
      } else {
      //usuario no encontrado muestro mensaje en la vista
      form.reset();
      this.msglogin="Credenciales incorrectas..";
      }
    },
    error => {
      alert("Error de conexion");
      console.log("error en conexion");
      console.log(error);
    }
  );
 }

 mostrarPassword(){
   this.mostrar_password = !this.mostrar_password;
 }


}

