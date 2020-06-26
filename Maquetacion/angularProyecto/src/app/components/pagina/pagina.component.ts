import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public urlSegundo: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.urlSegundo = Global.urlSegunda;
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }

  redireccion(){
    this._router.navigate([this.urlSegundo]);
  }

}
