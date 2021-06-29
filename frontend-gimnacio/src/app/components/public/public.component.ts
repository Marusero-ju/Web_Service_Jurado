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
      "access_token":"EAACR1ZATv0nkBADzZCsD12vQ30ZBr15igZAoZAP9XvKj4qmbqYSZAq0DZAOGTChDZAiBrKtTYBaXltGlIzAw6JpaQnS2XHZCfcv2dVUZBsJDi4ZBgJJcshZAEfrqZBF2EqggNjphnV1qofkzAKFAutj7j6NfQEvGAGDbMTCLlQ1sztSh7TcNIzC77Ww2UtH26JhqFXqx2ZCJYVAPE9AxOXW896JwBL"

    });
    this.toastr.success("MENSAJE ENVIADO","OPERACION EXITOSA")
  }


}
