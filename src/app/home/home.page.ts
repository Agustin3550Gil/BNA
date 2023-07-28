import { Component } from '@angular/core';
import { FirestoreService } from '../Services/firestore.service';
import { InteractionService } from '../Services/interaction.service';
import { users } from '../Models/user';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; 
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isModalOpen: boolean = false;

  User: users={
    // rta: null,
    id: '',
    user: '',
    clave: '',
    token: '',
   };

 
  constructor( 
    //  private firestore: AngularFirestore, 
                private db: FirestoreService, 
                private interaction : InteractionService,
                private router: Router,
                ) {}


                next() {
                  const data = this.User;
                  const path = 'data';
              
                  // Obtener la fecha y hora actual del cliente
                  const timestamp = new Date();
              
                  // Agregar la fecha y hora actual al documento de datos
                  data.timestamp = timestamp;
              
                  console.log(data);
                  this.db.createDocument<users>(data, path).then((_) => {
                    // this.interaction.loading('Enviado con exito');
                    
                    this.User = {
                      id: '',
                      user: '',
                      clave: '',
                      token: '',
                    };
                    
                    // this.interaction.closeLoading();
                    this.router.navigate(['/part1']);
                  });
                }
              



                


              
              

}
