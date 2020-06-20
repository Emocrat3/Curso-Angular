import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
public peliculas: Pelicula[];
  constructor() { 
    this.peliculas = [
      new Pelicula("Camino ninja", 2015, "http://4.bp.blogspot.com/-v9T9Py3Sezo/UBIi7mwOYWI/AAAAAAAAGuA/aAanCiV6fFk/s1600/Naruto+the+Movie+6+Road+to+Ninja.jpg" ),
      new Pelicula("Camino ninja", 2016, "https://i.playview.io/images/2019/01/08/5xInMEyCa4mZoAgpxAfmH1kG3GM.jpg"),
      new Pelicula("El arco y la flecha escarlatas", 2017, "https://2.bp.blogspot.com/-O3_zYH_GyDc/V6rdAw_rpkI/AAAAAAAAC8M/fKKER4p2y4EI7wTSJNckh-dyWMlPfTaQwCLcB/s1600/28s4i06.png")
   ];
  }

  ngOnInit() {
    console.log(this.peliculas);
  }

}
