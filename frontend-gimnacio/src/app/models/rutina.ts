import { Alumno } from "./alumno";
import { DiaRutina } from "./dia-rutina";
import { Ejercicio } from "./ejercicio";

export class Rutina {
    _id: string;
    descripcion: string;
    duracion: number;
    cantidadSeries: number;
    repeticiones: number;
    intensidad: number;
    alumno: Alumno;
    ejercicio: Ejercicio;
    dia: DiaRutina;

    constructor(){

    }

}
