import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  enCarrito: Producto[];
  subTo: number[] = new Array();
  total: number;
  envio: number = 250;

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
    this.enCarrito = this.productosDispoService.getCarrito();
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
    this.enCarrito.forEach(p=>{
      t = t+this.precioTotal(p.comprar,p.precio);
    })
    return t;
  }
  totalTotal(){
    let t = 0;
    t = this.subTotal()+this.envio;
    return t
  }
  eliminarProd(i:number){
    this.enCarrito.splice(i,1);
  }
  descuento(p:Producto){
    let desc : boolean = false;
    if(p.comprar>4){
      desc=true;
    }
    return desc;
  }
}
