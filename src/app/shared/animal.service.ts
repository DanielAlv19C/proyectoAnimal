import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { ANIMALES } from '../misanimales';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animales:Animal[]=ANIMALES;

  constructor() { }

  getAnimales():Animal[]{
    return this.animales;
  }

  getUnAnimal(posicion:number):Animal{
    return this.animales[posicion];
  }
}
