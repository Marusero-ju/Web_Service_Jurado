import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistencia } from '../models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getAsistencias():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'asistencia',httpOptions);
  }

  getAsistencia(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'asistencia/'+id,httpOptions)
  }

  addAsistencia(asistencia: Asistencia):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    console.log(asistencia);
    let body= JSON.stringify(asistencia);
    console.log(body);

    return this._http.post(this.urlBase+'asistencia',body,httpOptions);
  }

  updateAsistencia(asistencia:Asistencia):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(asistencia);

    return this._http.put(this.urlBase+'asistencia/'+asistencia._id, body, httpOptions);
  }

  deleteAsistencia(asistencia: Asistencia):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };

    return this._http.delete(this.urlBase+'asistencia/'+asistencia._id,httpOptions);
  }

}
