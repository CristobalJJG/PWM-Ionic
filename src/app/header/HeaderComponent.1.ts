import { Component, OnInit, } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserMinInfo } from 'src/interfaces/UserMinInfo';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-compra.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit{

  userImg: Observable<string> | undefined;
  public ruta = "/login";
  public nombre:string = "";
  public user:UserMinInfo = undefined;
  public loggedMail:string = ""

  constructor(public auth_: AuthService,
    private storage: AngularFireStorage,
    private router:Router) {
    this.getUserImg();
    if(this.loggedMail != ""){
      
    }
  }
  
  async ngOnInit(){
    this.loggedMail = (await this.auth_.getCurrentUser()).email;
    this.user = this.auth_.getUserInfo(this.loggedMail);
  }

  changeRoute(){
    console.log("Redireción", this.user)
    if((this.user !== undefined) && (this.loggedMail != null)){
      this.router.navigate(['/perfil']);
    }else{
      this.router.navigate(['/login'])
    }
  }

  async getUserImg() {
    try{
      await this.storage.ref("Profile_images/" + this.user.id.split("@")[0])
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      console.error("Profile","No se encontró foto para este usuario.");
    }
  }
}
