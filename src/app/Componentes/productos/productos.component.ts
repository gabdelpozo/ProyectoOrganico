import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  todos: boolean;
  frutas: boolean;
  verduras: boolean;
  secos: boolean;
  bandejas: boolean;
  productos: Producto[];
  nombre: string = '';
  unidad: string = '';
  precio: number = 0;

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit() {
    this.productos = this.productosDispoService.getProductos();
  }
  infoTodos(todos:boolean){
    this.todos = todos;
  }
  infoFrutas(frutas){
    this.frutas = frutas;
  }

}

  

