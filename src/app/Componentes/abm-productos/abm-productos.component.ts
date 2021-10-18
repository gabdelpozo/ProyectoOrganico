import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abm-productos',
  templateUrl: './abm-productos.component.html',
  styleUrls: ['./abm-productos.component.scss']
})
export class AbmProductosComponent implements OnInit {

  
  productosBase;

  prod: Producto = new Producto();

  constructor(private httpClient: HttpClient, private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
  }

  altaProd() {
    this.productosDispoService.insertarProducto(this.prod)
      .subscribe(ok => {
        console.log(ok);
      });
      this.getProd();
      this.limpiarProducto();
  }

  getProd() {
    this.productosDispoService.getProductos()
      .subscribe(ok => {
        this.productosBase = ok;
        console.log(ok);
      })
  }

  modificarProd(producto) {
    this.productosDispoService.setProductos(producto)
      .subscribe(ok => {
        let r: any = ok;
        console.log(ok);
        if (r.affected == 1){
          Swal.fire('el producto fue modificado correctamente')
        }
      })
  }

  eliminarProd(producto, indice) {
    this.productosDispoService.deleteProducto(producto)
      .subscribe(respuesta => {
        let r: any = respuesta;
        console.log(respuesta);
        if (r.affected == 1) {
          Swal.fire({
            title: 'Estás seguro/a/e?',
            text: "Querés eliminar " + producto.nombre + "?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.productosBase.splice(indice, 1);
              Swal.fire(
                'Eliminado',
                producto.nombre + 'fue eliminado.',
                'success'
              )
            }
          })
        }
      }, (error) => {
        Swal.fire ("Ocurrió un error");
      })

    console.log(producto, indice);

  }

  limpiarProducto(){
    this.prod = new Producto;
  }
}


