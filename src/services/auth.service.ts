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
  private _user: User = undefined;
  public isLogged:any = false;

  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,){
    auth.authState.subscribe( user => (this.isLogged = user));
  }

  async SignIn(user:User){
    try{
      const auth_ = getAuth()
      setPersistence(auth_, browserSessionPersistence)
      .then(() => {
        this._user=user;
        localStorage.setItem(this._user.correo, this._user.password);
        return signInWithEmailAndPassword(auth_,
        user.correo.toString().toLowerCase().trim(), 
        user.password
      );
      })
      
    } catch (err){
      console.error('Error on login: ', err);
      return null;
    }
  }

  async RegisterNewUser(user:User){
    try{
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
    if(this._user == undefined){
      return undefined;
    }
    return this._user;
  }
 
}
