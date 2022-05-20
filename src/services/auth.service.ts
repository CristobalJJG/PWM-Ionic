import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getDatabase, ref, onValue, set} from "firebase/database";
import { User } from 'src/interfaces/user';
import { Auth } from 'firebase/auth';
import { first } from 'rxjs/operators';
import { UserMinInfo } from 'src/interfaces/UserMinInfo';
import { FirestoreService } from './firestore.service';
import { NewProduct } from 'src/interfaces/newProduct';
import { Logger } from '@angular-devkit/core/src/logger';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLogged:any = false;
  private _user: UserMinInfo = undefined;

  constructor(private afAuth: AngularFireAuth,
    private dbfr: AngularFirestore,
    private db: FirestoreService){ }

  async login(user_: User){
    try{
      this.getUserInfo(user_.correo);      
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
      this.getUserInfo(user_.correo);   
      const res = await this.afAuth.createUserWithEmailAndPassword(user_.correo, user_.password);
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

  getUserInfo(mail:string):UserMinInfo{
    let prom = new Promise<any>((resolve) => {
      this.dbfr.collection('Usuarios')
      .valueChanges({ idField: 'id' })
      .subscribe(users => resolve(users));
    });
    let shortM = mail.split("@")[0]
    prom.then((data:UserMinInfo[]) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id === shortM){
          this.user = data[i];
          return data[i];
        }
      }
    });
    return null;
  }

  set user(user: UserMinInfo){
    this._user = user;
  }

  get user(): UserMinInfo{
    return this._user;
  }

  addNewUserToDB(user_:User){
    this.dbfr.collection("Usuarios")
      .doc(user_.correo.split("@")[0])
      .set({
        nombre:user_.nombre,
        favoritos: user_.favorito,
        cesta: user_.cesta
      });
  } 

  async commitChange(){
    console.log("ACTUALIZADO");
    
    await this.dbfr.collection("Usuarios")
      .doc(this.user.id)
      .set({
        nombre: this.user.nombre,
        favoritos: this.user.favoritos,
        cesta: this.user.cesta
      });
  }

  updateName(name:string){
    this.user.nombre=name;
    this.commitChange();
  }

  async pushItemToFavourite(id:string){
    await this.db.getAllProducts().then((data:NewProduct[]) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
          this.user.favoritos.push(data[i]);
        }
      }
    })
    this.commitChange();
  }

  async pushItemToCesta(id:string){
    console.log(this.user)
    await this.db.getAllProducts().then((data:NewProduct[]) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
          this.user.cesta.push(data[i]);
        }
      }
    })
    this.commitChange();
  }
}