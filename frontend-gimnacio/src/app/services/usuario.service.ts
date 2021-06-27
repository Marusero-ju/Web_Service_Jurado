import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getUsuarios():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'usuarios',httpOptions);
  }

  getUsuario(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'usuarios/'+id,httpOptions)
  }

  addUsuario(usuario: Usuario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body= JSON.stringify(usuario);

    return this._http.post(this.urlBase+'usuarios',body,httpOptions);
  }

  updateUsuario(usuario:Usuario):Observable<any>{
    console.log("Usuario update",usuario)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(usuario);
    
    return this._http.put(this.urlBase+'usuarios/'+usuario._id, body, httpOptions);
  }

  deleteUsuario(usuario: Usuario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.delete(this.urlBase+'usuarios/'+usuario._id,httpOptions);
  }
}
