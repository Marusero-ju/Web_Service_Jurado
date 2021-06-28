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
      "access_token":"EAAPlx64BQcgBALBUVZBFLBkqYRNenKtEPhQWHZBEZCEgZACewUtxYAEEyuvbPdeQELbsjgc2YRy8xLnbbMFLU0ZAIR8WpveSGhLNZAnidIVBZBqEKgMJhMrIg3MPz8M9oEBkPxGMtVxD0shmvnCMCbUvc1tHtsxtcLqEdKq1ZBxzDgIFOWd1tXs9KGR9ZAdESshp918Up4qfAop34eu6upZA1r"

    });
    this.toastr.success("MENSAJE ENVIADO","OPERACION EXITOSA")
  }


}
