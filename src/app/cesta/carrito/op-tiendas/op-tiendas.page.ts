import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-op-tiendas',
  templateUrl: './op-tiendas.page.html',
  styleUrls: ['../opciones.css'],
})
export class OpTiendasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
}
