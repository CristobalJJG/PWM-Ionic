import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login-signup.component.css'],
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

  async register(){
    const x = await this.auth.RegisterNewUser(this.userRegister);
    if(x != null){
      console.log("Usuario " + this.userRegister.correo + " creado exitosamente");
      this.route.navigateByUrl('/catalogo');
    }else{
      console.log("No se pudo crear el usuario")
    }
  }

  async login() {
    const x = await this.auth.SignIn(this.userLogIn);
    if(x != null){
      console.log("Usuario " + this.userLogIn.correo + " logeado exitosamente");
      this.route.navigateByUrl('/catalogo');
    }else{
      console.log("No se pudo loggear el usuario")
    }
  }

}
