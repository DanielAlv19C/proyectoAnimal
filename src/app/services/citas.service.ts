import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  constructor(private firestore: Firestore) {}

  getCitas(): Observable<any[]> {
    const citasCollection = collection(this.firestore, 'citas');
    return collectionData(citasCollection);
  }
}