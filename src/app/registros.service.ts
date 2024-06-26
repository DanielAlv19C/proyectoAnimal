import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, query, where } from '@angular/fire/firestore';
import { Cliente } from './clientes/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private firestore: Firestore) { }

  addRegistro(cliente: Cliente){
    const registroRef = collection(this.firestore, 'citas');
    return addDoc(registroRef, cliente);
  }

  getRegistro(): Observable<Cliente[]>{
    const registroRef = collection(this.firestore, 'citas');
    return collectionData(registroRef, { idField: 'id' }) as Observable<Cliente[]>;
  }

  deleteRegistro(id: string){
    const registroRef = doc(this.firestore, `citas/${id}`);
    return deleteDoc(registroRef);
  }

  getRegistrosByFecha(fecha: string): Observable<any[]> {
    const registroRef = collection(this.firestore, 'citas');
    const q = query(registroRef, where('fecha', '==', fecha));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  getRegistrosByIdusr(uid: string): Observable<any[]> {
    const registroRef = collection(this.firestore, 'citas');
    const q = query(registroRef, where('uid', '==', uid));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

}
