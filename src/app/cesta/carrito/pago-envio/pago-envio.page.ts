import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-pago-envio',
  templateUrl: './pago-envio.page.html',
  styleUrls: ['../opciones.css'],
})
export class PagoEnvioPage implements OnInit {

  constructor(private router:Router,
    private auth: AuthService,) { }
    private isLogged;
  async ngOnInit() {
    this.isLogged = (await this.auth.getCurrentUser());
    console.log(this.isLogged)
    console.log(this.auth.user)
  }

  finish(){
    console.log(this.isLogged)
    this.auth.deleteCesta();
    this.router.navigate(['/cesta']);
  }
}
