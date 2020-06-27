import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;

  constructor() { 
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    swal(
      'Envio exitoso!!',
      'El formulario se ha enviado correctamente',
      'success'
    );
    console.log(this.user);
  }

  hasDadoClick(){
    
  }
}
