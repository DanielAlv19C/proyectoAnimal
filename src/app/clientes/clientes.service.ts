import { Injectable } from '@angular/core';
import { Cliente, Animal } from './cliente.model';
import { ANIMALES } from '../misanimales';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  

  clientes!: Cliente[];
  animal: Animal[] = ANIMALES

  constructor() { 
    this.clientes = JSON.parse(localStorage.getItem('data') || '[]');
  }

  getAnimales(){
    return this.animal;
  }

  getClientes(){
    return this.clientes;
  }

  agregarCliente(cliente: Cliente){
    this.clientes.push(cliente);
    localStorage.setItem('data', JSON.stringify(this.clientes));
  }

  getCitasPorNombre(nombre: string): Cliente[] {
    console.log(nombre);
    const citas = JSON.parse(localStorage.getItem('data') ?? '') || [];
    console.log(citas);
    return citas.filter((citas: { nombre: string; apellido: string; }) => citas.nombre === nombre || citas.apellido === nombre);
  }

  nuevoCliente(){
    return {
      id: this.clientes.length.toString(),
      uid: '',
      fecha: '',
      hora: 0,
      nombre: '',
      apellido: '',
      telefono: '',
      email:'',
      animal: {
        edad: 0,
        color: '',
        raza: '',
        tiempo: '',
        comportamiento: '',
        img: '',
        tipo: ''
      }
    }
  }
}
