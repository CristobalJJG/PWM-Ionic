import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Route, Router } from '@angular/router';
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
  user:UserMinInfo = undefined;

  constructor(public auth:AuthService,
    private storage: AngularFireStorage,
    private router: Router) { 
    
  }

  async ngOnInit() {
    this.loggedMail = (await this.auth.getCurrentUser()).email;
    this.auth.getUserInfo(this.loggedMail);
  }

  userImg:Observable<string> | undefined;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.auth.user?.id.split("@")[0];
    this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg();
    this.showChange = true;
  }

  async getUserImg(){    
    try{
      await this.storage.ref("Profile_images/" + this.user.id.split("@")[0])
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      console.error("Profile: ","No se encontró foto para este usuario.");
    }
  }

  changeName(name:string){
    console.log("Nombre cambiado de " + this.auth.user?.nombre + " a " + name);
    this.auth.updateName(name);
  }

  logOut(){
    this.auth.logout();
    this.router.navigate([]);
  }
}
