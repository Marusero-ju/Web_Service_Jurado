import { User } from "./user";

export class Entrenador extends User{
    _id: string;
    apellido: string;
    nombre: string;
    dni: string;
    fechaNacimiento: Date;
    celular: string;
    domicilio: string;
    email: string;

    constructor(username?:string, password?:string, roles?:[], activo?:boolean){
        super(username, password, roles, activo);
    }
    
}
