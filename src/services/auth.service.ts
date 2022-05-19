import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getDatabase, ref, onValue} from "firebase/database";
import { User } from 'src/interfaces/user';
import { Auth } from 'firebase/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLogged:any = false;
  private _user: User = undefined;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFirestore,){ }

  async login(user_: User){
    try{
      return await this.afAuth.signInWithEmailAndPassword(user_.correo, user_.password);
    }catch(error){
      console.error(error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.error(error);
    }
  }

  async register(user_: User){
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(user_.correo, user_.password);
      this.user = user_;
      if(res != null){
        this.addNewUserToDB(user_);
      }
      return res;
    }catch(error){
      console.error(error);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  set user(user:User){
    this._user = user;
  }

  get user(): User {
    const res = this.getCurrentUser();
    res.then((data) => {
      const db = getDatabase();
      const starCountRef = ref(db, 'Usuarios' + data.email.split('@')[0]);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        return data
      });
    });
    return undefined;
  }

  addNewUserToDB(user_:User){
    this.db.collection("Usuarios")
      .doc(user_.correo.split("@")[0])
      .set({
        nombre:user_.nombre,
        favoritos: user_.favorito,
        cesta: user_.cesta
      });
  } 
}