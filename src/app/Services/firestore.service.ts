import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Asegúrate de importar desde '@angular/fire/compat'
// import { AngularFireStorage } from '@angular/fire/compat/storage'; // Asegúrate de importar desde '@angular/fire/compat'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
    // public fireStorage: AngularFireStorage
  ) {}

// guarda datos sin idÇ
createDocument<tipo>(data: tipo, enlace: string) {
const ref = this.firestore.collection(enlace);  
return ref.add(data)
  }


// guarda datos con id            
createDoc<tipo>(data: any, path: string, id: string) {
const collection = this.firestore.collection(path);
return collection.doc(id).set(data);

}
}

