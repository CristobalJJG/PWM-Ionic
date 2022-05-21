import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-tienda',
  templateUrl: './pago-tienda.page.html',
  styleUrls: ['../opciones.css'],
})
export class PagoTiendaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  finish(){
    this.router.navigate(['/catalogo']);
  }

}
