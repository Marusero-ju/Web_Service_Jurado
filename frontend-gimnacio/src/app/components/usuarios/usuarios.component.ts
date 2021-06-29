import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<Usuario>;
  usuario: Usuario;

  constructor(private toastr: ToastrService,
              private router: Router,
              private usuarioService: UsuarioService,
              private alumnoService: AlumnoService,
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
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.usuarios = new Array<Usuario>();
    this.usuarioService.getUsuarios().subscribe(
      result => {
        result.forEach(element => {
          let vUsuario= new Usuario();
          Object.assign(vUsuario,element);
          this.usuarios.push(vUsuario);
        }
        )},
      error=>{
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  seleccionarUsuario(usuario: Usuario){
    console.log("Usuario ", usuario)
    this.usuarioService.getUsuario(usuario._id).subscribe(
      result =>{
        this.usuario = result;
        this.toastr.success('OK');
        this.router.navigate(['usuario-form',this.usuario])
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  eliminarUsuario(usuario: Usuario):void{
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Realmente desea eliminar al usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar ahora!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (usuario.perfil === 'administrador'){
          this.toastr.error("No se puede eliminar al usuario ADMINISTRADOR");
        }else {
          this.usuarioService.deleteUsuario(usuario).subscribe(
            result=>{
              console.log(result.msg);
              this.cargarUsuarios();
              this.toastr.success(result.msg);
            },
            error=>{
              console.log(error);
              this.toastr.error(error);
            }
          );
          Swal.fire(
            'Borrado!',
            'El usuario se ha borrado.',
            'success'
          )
        }
        
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se borrado al usuario',
          'error'
        )
      }
    });
  }

}
