import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from './usuario';
import * as data from '../../../assets/contacto.json';
import lista from '../../../assets/contacto.json';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {
  listaPersonas: {
    nombre: string, apellido: string,
    email: string, pais: string, comentario: string
  }[] = lista;

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
    console.log(data);
  }
  mensaje: any;
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  comentario: string;

  miArray: any = this.productosDispoService.getMensajes();


  enviarInfo() {
    let miPersona :any;
    miPersona.nombre = this.nombre;
    miPersona.apellido = this.apellido;
    miPersona.email = this.email;
    miPersona.pais = this.pais;
    miPersona.comentario = this.comentario;
    //this.miArray.push(miPersona);
    this.productosDispoService.setMensajes(miPersona);
    console.log(this.productosDispoService.getMensajes());
  }

  verInfo: number = 0;

  mostrar() {
    this.verInfo = 1;
    console.log(this.productosDispoService.getMensajes());
  }

  ocultar() {
    this.verInfo = 0;
  }

/* 
 var fs = require('fs');

var data = {}
data.table = []

for (i = 0; i < 26; i++) {
  var obj = {
    id: i,
    square: i * i
  }
  data.table.push(obj)
}

fs.writeFile("input.json", JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('complete');
}
); */

//Hacer boton que vaya a una funcion que escriba HOLA en un archivo..


//Hacer componente de detalle para que cuando toque los productos me lleve a otra pagina con la descripcion del producto que se toco.
 
//Se podria poner leyenda para todos los detalles, si llevas mas de 5KG tenes 20% de dscto.



}


