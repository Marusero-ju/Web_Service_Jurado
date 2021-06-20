export class User {
    _id: string;
    username: string;
    password: string;
    roles: [];
    activo: boolean;

    constructor(username?:string, password?:string, roles?:[], activo?:boolean){
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.activo = activo;
    }
}
