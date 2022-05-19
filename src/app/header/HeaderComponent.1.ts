import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-compra.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit{

  userImg: Observable<string> | undefined;
  public ruta = "/login";
  constructor(public auth_: AuthService,
    private storage: AngularFireStorage) {
      this.getUserImg();
      if(this.auth_.user !== undefined){
        this.ruta = "/perfil/" + auth_.user.nombre;
      }
  }
  
  async ngOnInit(){
    const user = await this.auth_.getCurrentUser();
    if(user){
      console.log('user->', user);
    }else{
      console.log("no se pudo loggear");
      
    }
  }

  async getUserImg() {
    if(this.auth_?.user === undefined){
      await this.storage.ref("Profile_images/Usuario.png")
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }else{
      await this.storage.ref("Profile_images/" + this.auth_.user?.nombre)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }
}
