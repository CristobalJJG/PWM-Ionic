import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.css'],
})
export class PerfilPage {

  userName:any = "";
  showChange = false;

  constructor(public auth:AuthService,
    private storage: AngularFireStorage) { 
    console.log(auth.user);
    
    this.userName = this.auth.user?.nombre;
    if(this.auth.user === undefined){
      this.storage.ref("Profile_images/Usuario.png")
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }else{
      this.storage.ref("Profile_images/" + this.auth.user.nombre)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }

  userImg:Observable<string> | undefined;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.userName;
    this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg(this.userName);
    this.showChange = true;
  }

  async getUserImg(userName: string){    
    try{
      this.storage.ref("Profile_images/" + userName)
      .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      this.storage.ref("Profile_images/Usuario.png")
      .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }

  changeName(name:string){
    alert("Name changed from " + this.auth.user?.nombre + " to " + name);
  }
}
