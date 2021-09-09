import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tarjetaDebito: number = 0;
  tarjetaCredito: number = 0;
  efectivo: number = 0;

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
