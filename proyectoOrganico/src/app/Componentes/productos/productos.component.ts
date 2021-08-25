import { Component, OnInit } from '@angular/core';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: any;

  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
    this.productos = this.productosDispoService.getProductos();
  }

}
