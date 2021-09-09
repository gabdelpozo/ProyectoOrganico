import { Component, OnInit } from '@angular/core';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private productosDispoService: ProductosDispoService) { }


  ngOnInit(): void {
  }

  getCantidad():number{
    let c:number;
    c = this.productosDispoService.getCarrito().length;
    return c;
  }




}
