import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardEntrenamiento } from '../models/card-entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class CardentrenamientoService {

  urlBase ="http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getCards():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'card',httpOptions);
  }

  getCard(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase+'card/'+id,httpOptions)
  }

  addCard(card: CardEntrenamiento):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body= JSON.stringify(card);

    return this._http.post(this.urlBase+'card',body,httpOptions);
  }

  updateCard(card:CardEntrenamiento):Observable<any>{
    console.log("Card update",card)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(card);
    
    return this._http.put(this.urlBase+'card/'+card._id, body, httpOptions);
  }

  deleteCard(card: CardEntrenamiento):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.delete(this.urlBase+'card/'+card._id,httpOptions);
  }
}

