import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from 'firebase/auth'
import { User } from 'src/interfaces/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user!: User;
  public correo = "";
  public isLogged:any = false;

  constructor(private auth: AngularFireAuth, 
    private router:Router,
    private db: AngularFirestore,){
    auth.authState.subscribe( user => (this.isLogged = user));
  }

  async SignIn(user:User){
    try{
      this.correo = user.correo; 
      return await this.auth.signInWithEmailAndPassword(
        user.correo.toString().toLowerCase().trim(), 
        user.password
      );
    } catch (err){
      console.error('Error on login: ', err);
      return null;
    }
  }

  async RegisterNewUser(user:User){
    try{
      this.correo = user.correo; 
      this._user = user;
      this.addNewUser(user);
      return await this.auth.createUserWithEmailAndPassword(
        user.correo.toString().toLowerCase().trim(), 
        user.password
      );
    } catch (err){
      console.error('Error on register: ', err);
      return null;
    }
  }

  addNewUser(user:User){
    this.db.collection("Usuarios")
      .doc(user.correo)
      .set({
        nombre:user.nombre,
        favoritos: user.favorito,
        cesta: user.cesta
      });
  }

  get user(): User {
    return this._user;
  }
 
}
