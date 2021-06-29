import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rutina } from '../models/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getRutinas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'rutina',httpOptions);
  }

  // getRutina(id:string):Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({

  //     }),
  //     params: new HttpParams({

  //     })
  //   };
  //   return this._http.get(this.urlBase+'rutina/'+id,httpOptions)
  // }

  addRutina(rutina: Rutina):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body= JSON.stringify(rutina);

    return this._http.post(this.urlBase+'rutina',body,httpOptions);
  }

  // updateRutina(rutina:Rutina):Observable<any>{
  //   console.log("Rutina update",rutina)
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     }),
  //     params: new HttpParams({

  //     })
  //   };
  //   let body = JSON.stringify(rutina);
    
  //   return this._http.put(this.urlBase+'rutina/'+rutina._id, body, httpOptions);
  // }

  // deleteRutina(rutina: Rutina):Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
        
  //     }),
  //     params: new HttpParams({

  //     })
  //   };
    
  //   return this._http.delete(this.urlBase+'rutina/'+rutina._id,httpOptions);
  // }

}
