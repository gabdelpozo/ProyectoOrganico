import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  checks: any = {
    todos: true,
    verduras: true,
    frutas: true,
    secos: true,
    bandejas: true
  };

  productos: Producto[];
  verduras: any = new Array();
  frutas: any = new Array();
  secos: any = new Array();
  bandejas: any = new Array();
 

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit() {
    this.productos = this.productosDispoService.getProductos();
    for (let i = 0; i < this.productosDispoService.getProductos().length; i++) {
      if (this.productos[i].tipo == "verdura") {
        this.verduras.push(this.productos[i]);
      }
      if (this.productos[i].tipo == "fruta") {
        this.frutas.push(this.productos[i]);
      }
      if (this.productos[i].tipo == "secos") {
        this.secos.push(this.productos[i]);
      }
      if (this.productos[i].tipo == "bandeja") {
        this.bandejas.push(this.productos[i]);
      }
    }
    console.log(this.verduras);
  }

  capturoChecks(ch){
    this.checks = ch;
  }
}


  

