import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoPage {

  public productos:any = [];

  constructor(private dbService:FirestoreService){
    //dbService.addJSONToFirebase();
    this.getProducts();
  }

  async getProducts(){
    await this.dbService.getAllProducts()
    .then(data => {
      this.productos = data;
    });
  }

}
