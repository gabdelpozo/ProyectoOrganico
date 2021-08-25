import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-submenuproductos',
  templateUrl: './submenuproductos.component.html',
  styleUrls: ['./submenuproductos.component.scss']
})
export class SubmenuproductosComponent implements OnInit {
  productos: Producto[];
  mostrar: number = 0;


  todos: boolean = true;
  frutas: boolean = true;;
  verduras: boolean = true;;
  secos: boolean = true;;
  bandejas: boolean = true;;
  
  
  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
    this.productos = this.productosDispoService.getProductos();
  }

  checkTodo(){
    if(this.todos == true){
      this.frutas = true;
      this.verduras = true;
      this.secos = true;
      this.bandejas = true;
    }else{
      this.frutas = false;
      this.verduras = false;
      this.secos = false;
      this.bandejas = false;
    }
  }
  mostrarFrutas(){
    alert("ok")
  }

  mostrarVerduras() {
    alert("ok")
  }

  mostrarFrutos() {
    alert("ok")
  }

  mostrarBandejitas() {
    alert("ok")
  }


}
