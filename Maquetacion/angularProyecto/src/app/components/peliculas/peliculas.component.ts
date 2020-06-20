import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
public peliculas: Array<any>;
  constructor() { 
    this.peliculas = [
      {year: 2015, title: "Camino ninja", image: "http://4.bp.blogspot.com/-v9T9Py3Sezo/UBIi7mwOYWI/AAAAAAAAGuA/aAanCiV6fFk/s1600/Naruto+the+Movie+6+Road+to+Ninja.jpg"},
      {year: 2016, title: "Prisioneros del cielo", image: "https://i.playview.io/images/2019/01/08/5xInMEyCa4mZoAgpxAfmH1kG3GM.jpg"},
      {year: 2017, title: "El arco y la flecha escarlatas", image: "https://2.bp.blogspot.com/-O3_zYH_GyDc/V6rdAw_rpkI/AAAAAAAAC8M/fKKER4p2y4EI7wTSJNckh-dyWMlPfTaQwCLcB/s1600/28s4i06.png"}
   ];
  }

  ngOnInit() {
    console.log(this.peliculas);
  }

}
