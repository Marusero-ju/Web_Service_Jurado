import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getPlanes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'plan',httpOptions);
  }

  getPlan(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'plan/'+id,httpOptions)
  }

  addPlan(plan: Plan):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body= JSON.stringify(plan);

    return this._http.post(this.urlBase+'plan',body,httpOptions);
  }

  updatePlan(plan:Plan):Observable<any>{
    console.log("Plan Update",plan)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(plan);
    
    return this._http.put(this.urlBase+'plan/'+plan._id, body, httpOptions);
  }

  deletePlan(plan: Plan):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.delete(this.urlBase+'plan/'+plan._id,httpOptions);
  }

}
