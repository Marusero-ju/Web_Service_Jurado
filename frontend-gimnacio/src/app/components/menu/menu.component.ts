import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public loginService: LoginService,
              private router: Router) {
    if(this.loginService.userLoggedIn()){ 
      //acciones normales de componente 
      //acciones normales de componente 
    } 
    else { 
      alert("Debe validarse e ingresar su usuario y clave"); 
      this.router.navigate(['login']); 
    }     
  }

  ngOnInit(): void {
  }

}
