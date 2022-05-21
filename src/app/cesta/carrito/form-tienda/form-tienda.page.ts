import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tienda',
  templateUrl: './form-tienda.page.html',
  styleUrls: ['../opciones.css'],
})
export class FormTiendaPage implements OnInit {
  userInfo = {
    nombre:"",
    apellidos:"",
    correo:"",
    telefono:""
  }
  constructor() { }

  ngOnInit() {
  }

}
