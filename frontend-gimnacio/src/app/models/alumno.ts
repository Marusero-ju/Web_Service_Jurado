import { Plan } from "./plan";
import { User } from "./user";

export class Alumno extends User{
    _id: string;
    apellido: string;
    nombre: string;
    dni: string;
    fecha_nacimiento: Date;
    celular: string;
    domicilio: string;
    email: string;
    fecha_inicio: Date;
    plan: Plan; //Tipo Plan

    constructor(username?:string, password?:string, roles?:[], activo?:boolean){
        super(username, password, roles, activo);
    }
}
