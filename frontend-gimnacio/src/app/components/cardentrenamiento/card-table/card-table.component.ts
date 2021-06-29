import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as printJS from 'print-js';
import { CardEntrenamiento } from 'src/app/models/card-entrenamiento';
import { CardentrenamientoService } from 'src/app/services/cardentrenamiento.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {

  card: CardEntrenamiento;
  cards: Array<CardEntrenamiento>;
  cardJSON: JSON;

  constructor(private toastr: ToastrService,
    private router: Router,
    private cardService: CardentrenamientoService,
    private loginService: LoginService) { 
      if(this.loginService.userLoggedIn()){ 
        //acciones normales de componente 
        //acciones normales de componente 
    } 
    else { 
        alert("Debe validarse e ingresar su usuario y clave"); 
        this.router.navigate(['login']); 
    }
    }

  ngOnInit(): void {
    this.cargarCards();
  }

  imprimirTabla(){
    printJS({
      printable: this.cardJSON,
      properties: [
        { field:'titulo',displayName:'Titulo'},
        { field:'descripcion',displayName:'Descripción'},
        { field:'img',displayName:'URL'}],

      header: '<h2 class="titulo">Tabla de Cards Entrenamientos</h2>',
      style: '.titulo{font: arial bold 30px; text-align: center;}',
      gridHeaderStyle: 'border: 1px solid black;',
      gridStyle: 'border: 1px solid black; text-align: center;',
      documentTitle: 'CardsEntrenamiento',
      type: 'json'
    })
  }

  cargarCards(){
    this.cards = new Array<CardEntrenamiento>();
    this.cardService.getCards().subscribe(
      result => {
        this.cardJSON = result;
        result.forEach(element => {
          let vCard= new CardEntrenamiento();
          Object.assign(vCard,element);
          this.cards.push(vCard);
        }
        )},
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  seleccionarCard(card: CardEntrenamiento){
    console.log("Card ", card)
    this.cardService.getCard(card._id).subscribe(
      result =>{
        this.card = result;
        this.toastr.success('OK');
        this.router.navigate(['entrenamiento-form',this.card])
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  eliminarCard(card: CardEntrenamiento):void{
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Realmente desea eliminar al card?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar ahora!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cardService.deleteCard(card).subscribe(
          result=>{
            console.log(result.msg);
            this.cargarCards();
            this.toastr.success(result.msg);
          },
          error=>{
            console.log(error);
            this.toastr.error(error);
          }
        );
        Swal.fire(
          'Borrado!',
          'El card se ha borrado.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se borrado al card',
          'error'
        )
      }
    });
  }

}
