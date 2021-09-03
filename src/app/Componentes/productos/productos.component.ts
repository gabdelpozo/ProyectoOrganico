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
  carrito: Producto[];

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit() {
    this.productos = this.productosDispoService.getProductos();
    this.carrito = this.productosDispoService.getCarrito();
  }

  capturoChecks(ch){
    this.checks = ch;
    let mostrados: Producto[] = new Array(); 
    if (this.checks.verduras == true){
      this.productosDispoService.getProductos().forEach(p => {
        if (p.tipo == "verdura") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.frutas == true) {
      this.productosDispoService.getProductos().forEach(p => {
        if (p.tipo == "fruta") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.secos == true) {
      this.productosDispoService.getProductos().forEach(p => {
        if (p.tipo == "secos") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.bandejas == true) {
      this.productosDispoService.getProductos().forEach(p => {
        if (p.tipo == "bandeja") {
          mostrados.push(p);
        }
      })
    }
    this.productos = mostrados;
    console.log(this.productos)
  }

  agregar(p:Producto){
    this.productosDispoService.enCarrito.push(p);
    this.productosDispoService.organicArray.forEach(a => {
      if (p.nombre == a.nombre) {
        this.productosDispoService.setCantidad(p.nombre,p.comprar)
      }
    })
    console.log(this.productosDispoService.getCarrito());
    console.log(this.productosDispoService.getProductos())
  }
  cambiarBoton(p:Producto){
    if(this.productosDispoService.getCarrito().includes(p)){
      return true;
    }else{
      return false;
    }
  }
}


  

