import { Component, OnInit } from '@angular/core';
import { NewProduct } from 'src/interfaces/newProduct';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UserMinInfo } from 'src/interfaces/UserMinInfo';
import { CestaPage } from '../cesta.page';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito-costo.component.css'],
})
export class CarritoComponent implements OnInit {

  cesta: NewProduct[];
  loggedMail:string;
  suma:number

  constructor(private auth: AuthService,
    private db: AngularFirestore,
    private router:Router) { }

  async ngOnInit() {
    this.loggedMail = (await this.auth.getCurrentUser()).email;
    this.getCestaProducts();    
  }

  async getCestaProducts(){
    await new Promise<any>((resolve) => {
      this.db.collection('Usuarios')
      .valueChanges({ idField: 'id' })
      .subscribe(users => resolve(users));
    }).then((data:UserMinInfo[]) =>{
      for(let i = 0; i < data.length; i++){
        if(data[i].id == this.loggedMail.split("@")[0]){
          this.cesta = data[i].cesta;
          var n:number = 0;
          for(let i = 0; i < this.cesta?.length; i++){
            n = n + this.cesta[i]?.precio;
          }
          this.suma = n;
        }
      }
    });
  }
}
