import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-compra.component.css'],
})
export class HeaderComponent {

  userImg: Observable<string> | undefined;

  constructor(public auth_: AuthService,
    private storage: AngularFireStorage) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          this.setNombre(user.email?.split('@')[0] + "");
        }
      } catch (err) {
        console.error('Name Error: ' + err);
      }
    });
    this.getUserImg(auth_.getUsername());
  }

  setNombre(nombre: string) {
    this.auth_.correo = nombre;
  }

  async getUserImg(userName: string) {
    try {
      this.storage.ref("Profile_images/" + userName)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    } catch (err) {
      this.storage.ref("Profile_images/Usuario.png")
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }

}
