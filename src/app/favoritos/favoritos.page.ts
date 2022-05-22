import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { identity } from 'rxjs';
import { NewProduct } from 'src/interfaces/newProduct';
import { UserMinInfo } from 'src/interfaces/UserMinInfo';
import { AuthService } from 'src/services/auth.service';
import { FirestoreService } from 'src/services/firestore.service';
import { OfflineDbService } from 'src/services/offline-db.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['../catalogo/catalogo.component.css'],
})
export class FavoritosPage implements OnInit {
  favs:NewProduct[];
  loggedMail:string;

  constructor(private auth: AuthService,
    private db: AngularFirestore,
    private router:Router,
    private sqlite:OfflineDbService) { }

  async ngOnInit(){
    this.loggedMail = (await this.auth.getCurrentUser()).email;
    this.getFavsProducts()
   }

  async getFavsProducts(){
    /* await new Promise<any>((resolve) => {
      this.db.collection('Usuarios')
      .valueChanges({ idField: 'id' })
      .subscribe(users => resolve(users));
    }).then((data:UserMinInfo[]) =>{
      for(let i = 0; i < data.length; i++){
        if(data[i].id == this.loggedMail.split("@")[0]){
          this.favs = data[i].favoritos;
        }
      }
    }); */
    this.sqlite.getAllFavourites().then((res) => {
      this.favs = res;
      console.log(res);
    });
  }

  goToObject(id:string){
    this.router.navigate(["objeto", id]);
  }

   deleteFavourites(){
    /* this.sqlite.removeAllFromFavs(); */
  } 

}
