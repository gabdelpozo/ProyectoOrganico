import { Component, OnInit, Input } from '@angular/core';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';
import { Producto } from 'src/app/Clases/Producto';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent implements OnInit {
  @Input() enCarrito: Producto[];
  @Input() subTo: number[] = new Array();
  @Input() total: number;

  tarjetaDebito: number = 0;
  tarjetaCredito: number = 0;
  efectivo: number = 0;

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
    this.enCarrito = this.productosDispoService.getCarrito();
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

  
}
