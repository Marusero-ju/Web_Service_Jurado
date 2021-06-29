import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardEntrenamiento } from 'src/app/models/card-entrenamiento';
import { CardentrenamientoService } from 'src/app/services/cardentrenamiento.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  card: CardEntrenamiento;
  image_card: File | null;

  // public form: {
	// 	titulo: string;
	// 	descripcion: string;
	// 	image_card: File | null;
	// };

  constructor(private cardService: CardentrenamientoService,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService) {
      if(this.loginService.userLoggedIn()){
        //acciones normales de componente
        //acciones normales de componente
        this.image_card = null;
        // this.form = {
        //   titulo: "",
        //   descripcion: "",
        //   image_card: null
        // };
      }
      else {
        alert("Debe validarse e ingresar su usuario y clave");
        this.router.navigate(['login']);
      }
    }

  ngOnInit(): void {
    this.card = new CardEntrenamiento();
    this.card.img = "";
  }

  agregarCard(form: NgForm):void{
    console.log("CARD",this.card)
    console.log("Image", this.image_card)
    this.cardService.addCard(this.card, this.image_card).subscribe(
      result=>{
        console.log("Card ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['entrenamiento-table']);
        }else{
          this.toastr.error(result.msg);
          form.reset
        }
        console.log(result)
      },
      error=>{
        this.toastr.error(error);
      }
    )
  }

  onFileChange(e){
    console.log("FileChange", e);
    this.image_card = e.target.files[0];
    console.log("Image: ",this.image_card);





    // let fileCount: number = e.target.files.length;
    // console.log("LENGTH", fileCount)
    // let formData = new FormData();
    // if (fileCount > 0) { // a file was selected
    //     for (let i = 0; i < fileCount; i++) {
    //         formData.append('image', e.target.files[i]);
    //     }
    //     let headers = new Headers();
    //     headers.append('Accept', 'application/json');
    //     // const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    //     console.log('FORMDATA', formData);
        //     this.http.post('http://localhost:3000/stretch/1' + token, formData, { headers: headers }).map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log(data),
        //         error => console.log(error)
        // );
    //}
  }

  limpiarFormulario(form: NgForm):void{
    this.card = new CardEntrenamiento();
    form.reset();
  }

  cancelar(){
    this.router.navigate(['entrenamiento-table']);
  }

}
