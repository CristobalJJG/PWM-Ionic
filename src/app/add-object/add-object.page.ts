import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NewProduct } from 'src/interfaces/newProduct';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.page.html',
  styleUrls: ['./add-object.component.css'],
})
export class AddObjectPage implements OnInit {

  product:NewProduct = {
    id:"",
    nombre:"",
    descripcion:"",
    ubicaciones: [],
    precio: 0,
    categoria:"Abrigo",
    mainPhoto:""
  }
  addUbi = "";

  constructor(private storage:AngularFireStorage,
    private fire: FirestoreService,
    private alert: AlertController,
    private router:Router) {
      this.extraData = Math.random().toString(36).substring(2);
     }

  ngOnInit(): void {
  }

  addUbicacion(){
    if(this.addUbi.trim() != ("" && " ")){
      this.product.ubicaciones.push(this.addUbi);
    }
    this.addUbi = "";
  }

  img:Observable<string> | undefined;
  extraData;
  async onUpload(e:any){
    const filePath = 'Fotos_Catalogo/' + this.extraData;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, e.target.files[0]);
    task.snapshotChanges().pipe( 
      finalize(() => this.img = ref.getDownloadURL() )
    ).subscribe();
  }

  async addObject(){
    this.product.id = this.extraData;
    this.img?.subscribe((data) => {
      this.product.mainPhoto = data;      
      this.fire.addNewProduct(this.product)
    });
      const alerta = this.alert.create({
        header: 'Nombre cambiado',
        message: 'Objeto añadido con éxito, se le cambiará a la página del catálogo.',
        buttons:['Okey']
      });
      (await alerta).present();
      this.router.navigate(['/catalogo']);
  }
}
