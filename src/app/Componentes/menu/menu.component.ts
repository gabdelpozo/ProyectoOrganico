import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';
import { Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Script } from 'vm';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  carro: Producto[];

  constructor(private productosDispoService: ProductosDispoService, public readonly swalTargets: SwalPortalTargets, private router: Router) { }


  ngOnInit(): void {
    this.carro = this.productosDispoService.getCarrito();
  }

  getCantidad():number{
    let c:number;
    c = this.productosDispoService.getCarrito().length;
    return c;
  }

  aCarrito(){
    this.router.navigateByUrl('/carrito')
  }

}
