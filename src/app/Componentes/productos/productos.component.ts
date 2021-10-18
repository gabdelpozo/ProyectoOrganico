import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Clases/Producto';
import { HttpService } from 'src/app/servicio/http.service';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';
import Swal from 'sweetalert2';

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

  productos: any;
  carrito: Producto[];
  toast: string;

  constructor(private productosDispoService: ProductosDispoService, private router: Router, private httpService : HttpService) { }

  ngOnInit() {
    this.productosDispoService.getProductos()
    .subscribe(info =>{
      this.productos = info;
    });
    this.carrito = this.productosDispoService.getCarrito();
  }

  capturoChecks(ch) {
    this.checks = ch;
    let productosDB: any;
    let mostrados: any;
    this.productosDispoService.getProductos()
    .subscribe(prod =>{
      productosDB = prod;
    })
    if (this.checks.verduras == true) {
      productosDB.forEach(p => {
        if (p.tipo == "verdura") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.frutas == true) {
      productosDB.forEach(p => {
        if (p.tipo == "fruta") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.secos == true) {
      productosDB.forEach(p => {
        if (p.tipo == "secos") {
          mostrados.push(p);
        }
      })
    }
    if (this.checks.bandejas == true) {
      productosDB.forEach(p => {
        if (p.tipo == "bandeja") {
          mostrados.push(p);
        }
      })
    }
    this.productos = mostrados;
    console.log(this.productos)
  }

  agregar(p: Producto) {
    this.productosDispoService.enCarrito.push(p);
    this.productosDispoService.organicArray.forEach(a => {
      if (p.nombre == a.nombre) {
        this.productosDispoService.setCantidad(p.nombre, p.comprar)
      }
    })
    console.log(this.productosDispoService.getCarrito());
    console.log(this.productosDispoService.getProductos())
    Swal.fire({
      imageUrl: '/../../assets/cart4.svg',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Producto agregado al carrito',
      html: 'Podrá eliminar el producto en la sección Carrito',
      timer: 2000,
      timerProgressBar: false,

    })

  }
  cambiarBoton(p: Producto) {
    if (this.productosDispoService.getCarrito().includes(p)) {
      return true;
    } else {
      return false;
    }
  }

  detalle(producto) {
    console.log(producto);
    this.productosDispoService.setProductoSeleccionado(producto);
    this.router.navigate(["detalle"]);
  }


  isDisabled(p) {
    let disabled: boolean;
    if (p.comprar > 0) {
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  /*url: string = "http://localhost:3000/producto"
  
  getProductos(){
    this.httpClient.get(this.url)
      .subscribe(info => {
        //console.log(info);
        this.productos = info;
      });
  }*/


}




