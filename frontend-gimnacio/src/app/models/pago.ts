import { Alumno } from "./alumno";

export class Pago {
    _id: string;
    monto: number;
    fecha_pago: Date;
    fecha_vencimiento: Date;
    forma_pago: string; // Tipo formaPago
    completo: boolean;
    alumno: Alumno;
}
