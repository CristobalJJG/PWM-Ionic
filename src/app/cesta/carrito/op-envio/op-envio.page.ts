import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-op-envio',
  templateUrl: './op-envio.page.html',
  styleUrls: ['../opciones.css'],
})
export class OpEnvioPage implements OnInit {
  userInfo = {
    nombre:"",
    apellidos:"",
    correo:"",
    telefono:"",
    direccion:"",
    codPostal:"",
    ciudad:"",
    provincia:""
  }
  constructor() { }

  ngOnInit() {
  }

}
