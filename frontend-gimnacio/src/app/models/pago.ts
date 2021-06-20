import { Alumno } from "./alumno";

export class Pago {
    _id: string;
    fechaPago: string;
    monto: number;
    fechaVencimiento: number;
    formaPago: string; // Tipo formaPago
    completo: boolean;
    alumno: Alumno;
}
