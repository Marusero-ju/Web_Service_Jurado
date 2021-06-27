import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardEntrenamiento } from 'src/app/models/card-entrenamiento';
import { CardentrenamientoService } from 'src/app/services/cardentrenamiento.service';

@Component({
  selector: 'app-cardentrenamiento',
  templateUrl: './cardentrenamiento.component.html',
  styleUrls: ['./cardentrenamiento.component.css']
})
export class CardentrenamientoComponent implements OnInit {

  cards: Array<CardEntrenamiento>;

  constructor(private toastr: ToastrService,
    private router: Router,
    private cardService: CardentrenamientoService) { }

  ngOnInit(): void {
    this.cargarCards();
  }

  cargarCards(){
    this.cards = new Array<CardEntrenamiento>();
    this.cardService.getCards().subscribe(
      result => {
        result.forEach(element => {
          let vAlumno= new CardEntrenamiento();
          Object.assign(vAlumno,element);
          this.cards.push(vAlumno);
        }
        )},
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

}
