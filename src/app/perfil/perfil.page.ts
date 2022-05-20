import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
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
    private storage: AngularFireStorage) { 
    
  }

  async ngOnInit() {
    this.loggedMail = (await this.auth.getCurrentUser()).email;
    this.user = this.auth.getUserInfo(this.loggedMail);
  }

  userImg:Observable<string> | undefined | string;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.user.id;
    this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg(this.user.id);
    this.showChange = true;
  }

  async getUserImg(userName: string){    
    try{
      if(this.loggedMail != ""){
        await this.storage.ref("Profile_images/Usuario.png")
          .getDownloadURL().subscribe((data) => this.userImg = data);
      }else{
        await this.storage.ref("Profile_images/" + userName)
          .getDownloadURL().subscribe((data) => this.userImg = data);
      }
    }catch(err){
      this.userImg = "/src/assets/images/Logos/Usuario.png"
    }
  }

  changeName(name:string){
    alert("Name changed from " + this.user?.nombre + " to " + name);
  }
}
