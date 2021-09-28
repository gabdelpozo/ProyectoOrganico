import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Clases/Producto';
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

  productos: Producto[];
  carrito: Producto[];
  toast: string;

  constructor(private productosDispoService: ProductosDispoService, private router: Router) { }

  ngOnInit() {
    this.productos = this.productosDispoService.getProductos();
    this.carrito = this.productosDispoService.getCarrito();
  }

  capturoChecks(ch) {
    this.checks = ch;
    let mostrados: Producto[] = new Array();
    if (this.checks.verduras == true) {
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


}




