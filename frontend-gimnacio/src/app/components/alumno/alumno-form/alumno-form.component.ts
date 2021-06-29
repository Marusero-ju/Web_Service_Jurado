import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  alumno: Alumno;
  planes: Array<Plan>;
  mostrar_boton: boolean;

  constructor(private alumnoService: AlumnoService,
              private planesService: PlanService,
              private toastr: ToastrService,
              private router: Router,
              private rutaActiva: ActivatedRoute,
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
    this.alumno = new Alumno();
    this.cargarPlanes();
    // Object.assign(vAlumno,element);

    if(this.rutaActiva.params['value']._id === undefined){
      this.mostrar_boton = false;  
    }else{
      this.mostrar_boton = true;
      console.log("ALUMNOSsss",this.rutaActiva.params)
      // Object.assign(this.alumno,this.rutaActiva.params['value']);

      // this.alumno.plan = this.planes.find(a=>(a._id == this.rutaActiva.params['value'].plan._id));
      this.cargarAlumno(this.rutaActiva.params['value']._id);
      
    }
  }

  cargarPlanes():void {
    this.planes = new Array<Plan>();
    this.planesService.getPlanes().subscribe(
      result =>{
        result.forEach(element => {
          let vPlan = new Plan();
          Object.assign(vPlan, element);
          this.planes.push(vPlan);
        });
      },
      error => {
        console.log(error);
        this.toastr.warning('Error en el server al cargar los Planes');
      }
      
    )
  }

  cargarAlumno(id: string){
    //llamar al service para cargar un sector
    this.alumnoService.getAlumno(id).subscribe(
      result=>{
        Object.assign(this.alumno, result);
        console.log(this.alumno);
        this.alumno.plan = this.planes.find(a=>(a._id == this.alumno.plan._id));
      },
      error=>{
        console.log('Error', error);
      }
    );
  }

  agregarAlumno(form: NgForm):void{
    this.alumnoService.addAlumno(this.alumno).subscribe(
      result=>{
        console.log("Alumno ", result)
        if(result.status == "1"){
          this.toastr.success(result.msg);
          form.reset
          this.router.navigate(['alumno-table']);
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

  modificarAlumno():void{
    this.alumnoService.updateAlumno(this.alumno).subscribe(
      result=>{
        if(result.status == "1"){
          this.toastr.success(result.msg);
          this.router.navigate(['alumno-table']);
        }else{

        }
        console.log(result)
      },
      error=>{
        console.log(error);
      }
    )
  }

  limpiarFormulario(form: NgForm):void{
    this.alumno = new Alumno();
    form.reset();
  }

  cancelar(){
    this.router.navigate(['alumno-table']);
  }

}
