import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NewProduct } from 'src/interfaces/newProduct';

@Injectable({
  providedIn: 'root'
})
export class OfflineDbService {
  
  private dbInstance: SQLiteObject;
  readonly db_name:string = "favs.db";
  private isOpen:boolean;
  readonly db_table = "usertable"
  favs:Array<any>

  constructor(private database:SQLite) { 
      if(!this.isOpen){this.databaseConn();}
  }

  databaseConn() {
    this.database = new SQLite();
    return this.database.create({name: this.db_name, location: 'default'})
    .then((sqLite: SQLiteObject) => {
    this.dbInstance = sqLite;
    sqLite.executeSql(`
    CREATE TABLE IF NOT EXISTS ${this.db_table} (
    	"id"	TEXT,
      "nombre"	TEXT NOT NULL,
      "descripcion"	TEXT NOT NULL,
      "precio"	REAL NOT NULL,
      "categoria"	TEXT NOT NULL,
      "mainPhoto"	TEXT NOT NULL,
      PRIMARY KEY("id")`, [] )
    .then((res) => { alert(JSON.stringify(res)); } )
    .catch((error) => alert(JSON.stringify(error)));
    })
    .catch((error) => alert(JSON.stringify(error)));
  }

    getAllFavourites():Promise<any>{
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, [])
      .then((res) => {
        this.favs = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.favs.push(res.rows.item(i));
          }
          return this.favs;
      }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    addToFavourites(product:NewProduct){
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (id, nombre, descripcion, precio, categoria, mainPhoto) 
        VALUES ('${product.id}','${product.nombre}', '${product.descripcion}', 
        '${product.precio}', '${product.categoria}','${product.mainPhoto}')`, [])
      .then(() => {
        this.getAllFavourites();
      }, (e) => { alert(JSON.stringify(e.err)); });
    }
}
