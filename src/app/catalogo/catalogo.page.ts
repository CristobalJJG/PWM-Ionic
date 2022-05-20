import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewProduct } from 'src/interfaces/newProduct';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoPage implements OnInit{

  productos:NewProduct[];

  constructor(private dbService:FirestoreService,
    private router:Router, private route: ActivatedRoute){
    //dbService.addJSONToFirebase();
    this.dbService.getAllProducts()
    .then(data => {
      this.productos = data
    }); 
  }
  ngOnInit(): void {
    
  }

  goToObject(id:string){
    this.router.navigate(["objeto", id], {relativeTo: this.route});
  }
}
