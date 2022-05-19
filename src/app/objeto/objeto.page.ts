import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.page.html',
  styleUrls: ['./objeto.component.css'],
})
export class ObjetoPage implements OnInit {

  constructor(private route: ActivatedRoute, 
   /*  private json:JSONService,  */
    private dbService:FirestoreService){}
  objeto:any;

  ngOnInit(): void {      
    const id = this.route.snapshot.params['id'];

    const productos = this.dbService.getAllProducts();
     productos.then((data) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id === id){
          this.objeto = data[i]
          break;
        }
      }
      console.log(this.objeto)
    }) 
  }
}
