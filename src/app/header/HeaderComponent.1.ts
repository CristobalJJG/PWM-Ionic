import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-compra.component.css'],
})
export class HeaderComponent {

  userImg: Observable<string> | undefined;

  constructor(public auth_: AuthService,
    private storage: AngularFireStorage,
    private router: Router) {
      this.getUserImg();
  }

  async getUserImg() {
    if(this.auth_.user == undefined){
      this.storage.ref("Profile_images/Usuario.png")
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }else{
      this.storage.ref("Profile_images/" + this.auth_.user.nombre)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }

  changeRoute(){
    if(this.auth_.user == undefined){
      this.router.navigate(["/login"]);
    }else{
      this.router.navigate(["/perfil"]);
    }
  }
}
