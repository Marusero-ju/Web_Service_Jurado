import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getAlumnos():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'alumno',httpOptions);
  }

  getAlumno(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'alumno/'+id,httpOptions)
  }

  // getPasajeByCategoria(filtroCategoria: string):Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({

  //     }),
  //     params: new HttpParams({

  //     })
  //     .set('categoriaPasajero',filtroCategoria)
  //   };
  //   return this._http.get(this.urlBase+'alumno/categoria',httpOptions)
  // }

  addAlumno(alumno: Alumno):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body= JSON.stringify(alumno);

    return this._http.post(this.urlBase+'alumno',body,httpOptions);
  }

  updateAlumno(alumno:Alumno):Observable<any>{
    console.log("PASAJE UPDATE",alumno)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(alumno);
    
    return this._http.put(this.urlBase+'alumno/'+alumno._id, body, httpOptions);
  }

  deletePasaje(alumno: Alumno):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.delete(this.urlBase+'alumno/'+alumno._id,httpOptions);
  }
}
