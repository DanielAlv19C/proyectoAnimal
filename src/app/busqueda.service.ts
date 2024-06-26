// En busqueda.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private nombre = new BehaviorSubject<string>('');

  nombreActual = this.nombre.asObservable();

  constructor() { }

  cambiarNombre(nombre: string) {
    this.nombre.next(nombre);
  }

  getNombre(): string {
    return this.nombre.getValue();
  }
}