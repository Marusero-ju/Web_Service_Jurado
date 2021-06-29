import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-headerdefault',
  templateUrl: './headerdefault.component.html',
  styleUrls: ['./headerdefault.component.css']
})
export class HeaderdefaultComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
