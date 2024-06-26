export interface Cliente {
    id: string;
    uid: string;
    fecha: string;
    hora: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email:string;
    animal: Animal;
    
    
}

export interface Animal{
    edad: number;
    color: string;
    raza: string;
    tiempo: string;
    comportamiento: string;
    img: string;
    tipo: string;
}
