import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString: string;
  public contador: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.contador = 'Usuarios que han visitado la web';

  }

  ngOnInit(): void {
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }

}
