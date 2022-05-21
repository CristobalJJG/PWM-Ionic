import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { FirestoreService } from 'src/services/firestore.service';
import { OfflineDbService } from 'src/services/offline-db.service';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.page.html',
  styleUrls: ['./objeto.component.css'],
})
export class ObjetoPage implements OnInit {

  constructor(private route: ActivatedRoute, 
   /*  private json:JSONService,  */
    private dbService:FirestoreService,
    private auth: AuthService,
    private sqlite:OfflineDbService){}
  objeto:any;
  id:string
  
  async ngOnInit() {      
    let loggedMail = (await this.auth.getCurrentUser()).email;
    this.auth.getUserInfo(loggedMail);
    this.id = this.route.snapshot.params['id'];

    const productos = this.dbService.getAllProducts();
     productos.then((data) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id === this.id){
          this.objeto = data[i]
          break;
        }
      }
    }) 
  }

  addCarrito(){
    this.auth.pushItemToCesta(this.id);
  }

  addFavorito(){
    /* this.auth.pushItemToFavourite(this.id); */
    this.sqlite.addToFavourites(this.objeto);
  }
}
