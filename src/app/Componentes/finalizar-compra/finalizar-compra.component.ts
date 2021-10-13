import { Component, OnInit, Input } from '@angular/core';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';
import { Producto } from 'src/app/Clases/Producto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent implements OnInit {
  productosCarrito: Producto[];
  subTo: number[] = new Array();
  total: number;
  envio: number = 250;

  tarjetaDebito: number = 0;
  tarjetaCredito: number = 0;
  efectivo: number = 0;
  


  constructor(private productosDispoService: ProductosDispoService,  private router:Router) { }

  ngOnInit(): void {
    this.productosCarrito = this.productosDispoService.getCarrito();
  }

  

  pagoCredito(){
    this.tarjetaCredito = 1;
  }

  pagoDebito(){
    this.tarjetaDebito = 1;
  }

  pagoEfectivo(){
    this.efectivo = 1;
  }

  precioTotal(c: number, p:number){
    let ptotal = p*c;
    if(c>4){
      ptotal = ptotal*0.8;
    }
    return ptotal;
  }
  
  subTotal(){
    let t = 0;
    this.productosCarrito.forEach(p=>{
      t = t+this.precioTotal(p.comprar,p.precio);
    })
    return t;
  }
  totalTotal(){
    let t = 0;
    t = this.subTotal()+this.envio;
    return t
  }
  
  detalle(producto){
    console.log(producto);
    this.productosDispoService.setProductoSeleccionado(producto);
    this.router.navigate(["detalle"]);
  }

}
