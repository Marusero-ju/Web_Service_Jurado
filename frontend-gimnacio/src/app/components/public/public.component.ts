import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-fb';
import { ApiMethod } from 'ngx-fb/dist/esm/providers/facebook';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  mensaje: string = "";

  constructor(private fb: FacebookService,private toastr: ToastrService) {
  this.iniciarFb();
  }

  ngOnInit(): void {
  }
//metodo de conexion con la api
  iniciarFb(){
    let initParams: InitParams = {
      appId: '160346512806521',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v11.0'
    };
    this.fb.init(initParams);
  }

  postFb(){
    var apiMethod: ApiMethod = "post";
    this.fb.api('/109231908078210/feed', apiMethod,
    {
      "message": this.mensaje,
      "access_token":"EAACR1ZATv0nkBADYxdUaWGgCK8cajpd8PPZCpl6K3x57C9WTDUoKo0jIDGdBGAuuoFCnnyYbtPsCME0nd8R4ZAooy83FIylyBljh4d0AdLkQaJjxRdUwnpG2XY8MrZB7XxhGt5MftivrM3YOxVPUEZBfLqIJ8Eb0MnnA2i1kSEg72yKYUqVYXYZB01ii3lE5ol0894ZCHVnLh0PQw0Vl7ng"

    });
    this.toastr.success("MENSAJE ENVIADO","OPERACION EXITOSA")
  }


}
