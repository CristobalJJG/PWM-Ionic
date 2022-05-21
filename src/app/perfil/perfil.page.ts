import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user';
import { UserMinInfo } from 'src/interfaces/UserMinInfo';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.css'],
})
export class PerfilPage implements OnInit{
  loggedMail:string = "";
  userName="";
  showChange = false;

  constructor(public auth:AuthService,
    private storage: AngularFireStorage,
    private router: Router,
    private alert: AlertController) { 
      this.getUserImg();
  }

  async ngOnInit() {
    this.loggedMail = (await this.auth.getCurrentUser()).email;
    this.auth.getUserInfo(this.loggedMail);
  }

  userImg:Observable<string> | undefined | string;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.auth.user.id;
    this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg();
    this.showChange = true;
  }

  async getUserImg(){    
    try{
      console.log(this.auth.user.id)
      await this.storage.ref("Profile_images/" + this.auth.user.id)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      switch (err.code) {
        case 'storage/object-not-found':
          console.error("getUserImage", "No se encontró la foto"); break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.error("getUserImage", "Usuario no autorizado encontró la foto"); break;
        case 'storage/canceled':
          // User canceled the upload
          console.error("getUserImage", "Se canceló la subida de la foto"); break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          console.error("getUserImage", "Error chungo, su ordenador va a explotar"); break;
      }
      this.userImg = "../../assets/images/Logos/Usuario.png";
    }
  }

  goToAddProduct(){
    this.router.navigate(['/add-object']);
  }

  async changeName(name:string){
    if(name.trim() !== ""){
      const nombre = await this.auth.user?.nombre;
      this.auth.updateName(name);
      const alerta = this.alert.create({
        header: 'Nombre cambiado',
        message: 'Nombre cambiado de <b>' + nombre + '</b>  a <b>' + name + '</b> con éxito.',
        buttons:['Okey']
      });
      (await alerta).present();
    }
  }

  logOut(){
    this.auth.logout();
    this.router.navigate(["/catalogo"]);
  }
}
