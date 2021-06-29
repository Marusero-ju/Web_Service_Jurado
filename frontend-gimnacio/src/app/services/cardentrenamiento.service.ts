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

  addCard(card: CardEntrenamiento, image: File):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        //  "Content-Type": "application/json"
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'"
      }),
      params: new HttpParams({

      })
    };
    console.log("IMAGEEEEEEEEEE",image)
    var body = new FormData();
    body.append("titulo", "bbbb");
    body.append("descripcion", "bbbb");
    body.append("image", image, "/C:/Users/Ema Talavera/Desktop/PySW - 2021/8 - Trabajo Final/TPFinal/slide1.jpg");
    console.log("IMAGEN",image)
      // const body = {
      //   titulo: card.titulo,
      //   descripcion: card.descripcion,
      //   image: image
      // }

      console.log("BODY",body)
      //console.log("FORM", form)
    return this._http.post(this.urlBase+'cards', body ,httpOptions);
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

