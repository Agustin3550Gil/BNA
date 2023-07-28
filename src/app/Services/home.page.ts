
import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { users } from '../Interface/interface';
import { PlacesService } from '../Services/places.service';
import { InteractionService } from '../Services/interaction.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  User: users={
    // rta: null,
    id: '',
    user: '',
    clave: '',
    token: '',
   };


  constructor( 
    //  private firestore: AngularFirestore, 
                private db: PlacesService, 
                private interaction : InteractionService,
                
                ) {}


  // next(){
  //   const data = this.User
  //   const path = 'data'
  //   this.db.createDocument<users>(data, path).then((_) =>{
  //     this.interaction.presentToast('Enviado con exito');
  //     this.interaction.closeLoading;
  //     // this.routes.navigate(['/home']);
  //     this.User={
  //       id: '',
  //       user: '',
  //       clave: '',
  //       token: '',
  //      };
  //     } );
  // }

}
