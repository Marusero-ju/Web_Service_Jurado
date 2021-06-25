import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getPagos():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'pago',httpOptions);
  }

  getPago(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'pago/'+id,httpOptions)
  }

  addPago(pago: Pago):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    console.log(pago);
    let body= JSON.stringify(pago);
    console.log(body);

    return this._http.post(this.urlBase+'pago',body,httpOptions);
  }

  updatePago(pago:Pago):Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(pago);
    
    return this._http.put(this.urlBase+'pago/'+pago._id, body, httpOptions);
  }

  deletePasaje(pago: Pago):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.delete(this.urlBase+'pago/'+pago._id,httpOptions);
  }

}
