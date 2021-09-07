import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from '../../servicio/productos-dispo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  
  p : Producto;

  constructor(private productosDispoService:ProductosDispoService) {
    
   }

  ngOnInit(): void {
    this.p = this.productosDispoService.getProductoSeleccionado();
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
