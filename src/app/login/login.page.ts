import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login-signup.component.css'],
  providers: [AuthService],
})
export class LoginPage{

  /* Atributos */

  userLogIn:User = {
    id:0,
      nombre:"",
      cesta:[],
      favorito:[],
      password:"",
      correo:"",
  }

  userRegister:User = {
    id:0,
      nombre:"",
      cesta:[],
      favorito:[],
      password:"",
      correo:"",
  }

  constructor(public auth:AuthService,
    private route: Router) {}

  async login() {
    try{
      await this.auth.login(this.userLogIn);
      console.log("user", this.auth.user);
      
      console.log("currentUser", await this.auth.getCurrentUser());
      if((this.auth.user !== undefined) && 
          (await this.auth.getCurrentUser()).email != ""){
        console.log("Usuario " + this.userLogIn.correo + " logeado exitosamente");
        this.route.navigate(['/catalogo']);
      }else{
        console.log("No se pudo loggear el usuario")
      }
    }catch(err){
      console.error(err);
    }
  }

  async register(){
    await this.auth.register(this.userRegister);
    if((await this.auth.getCurrentUser()).email != ""){
      console.log("Usuario " + this.userRegister.correo + " creado exitosamente");
      this.route.navigate(['/catalogo']);
    }else{
      console.log("No se pudo crear el usuario")
    }
  }
}
