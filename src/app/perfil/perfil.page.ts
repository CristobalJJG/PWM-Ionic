import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.css'],
})
export class PerfilPage implements OnInit {

  userName:any = "";
  showChange = false;

  constructor(private auth:AuthService,
    private storage: AngularFireStorage) { 
    this.userName = this.auth.user.nombre;
    try{
      this.getUserImg(this.userName);
    }catch(err){
      console.error("No se encontró foto para este perfil");
    }
  }

  ngOnInit(): void {
    
  }


  userImg:Observable<string> | undefined;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.userName;
    const task = this.storage.upload(filePath, e.target.files[0]);
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
}
