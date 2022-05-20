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
    private router:Router) {}
  
  async ngOnInit(){
    this.loggedMail = (await this.auth_.getCurrentUser()).email;
    this.user = this.auth_.getUserInfo(this.loggedMail);
    this.getUserImg();
  }

  changeRoute(){
    console.log("Redireción", this.auth_.user)
    if((this.auth_.user !== undefined) && (this.loggedMail != null)){
      this.router.navigate(['/perfil']);
    }else{
      this.router.navigate(['/login'])
    }
  }

  async getUserImg() {
    /* try{
      await this.storage.ref("Profile_images/" + this.auth_.user?.id)
        .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      console.error("Profile: ",err);
    } */
  }
}
