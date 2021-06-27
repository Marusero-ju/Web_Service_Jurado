import { Usuario } from "./usuario";

export class Entrenador extends Usuario{
    _id: string;
    apellido: string;
    nombre: string;
    dni: string;
    fechaNacimiento: Date;
    celular: string;
    domicilio: string;
    email: string;

    constructor(username?:string, password?:string, nombres?:string,
        apellido?:string, perfil?:string){
        super(username, password, nombres, apellido, perfil);
    }
    
}
