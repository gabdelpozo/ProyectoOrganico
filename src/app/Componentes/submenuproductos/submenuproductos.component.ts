import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { ProductosDispoService } from 'src/app/servicio/productos-dispo.service';

@Component({
  selector: 'app-submenuproductos',
  templateUrl: './submenuproductos.component.html',
  styleUrls: ['./submenuproductos.component.scss']
})
export class SubmenuproductosComponent implements OnInit {

  @Output() ch: EventEmitter<any> = new EventEmitter<any>(); 

  checks: any = {
    todos: true,
    verduras: true,
    frutas: true,
    secos: true,
    bandejas: true
  };
  
  
  constructor(private productosDispoService: ProductosDispoService) { }

  ngOnInit(): void {
  }

  checkTodo(){
    this.checks.todos = this.checks.todos;
    if(this.checks.todos == true){
      this.checks.frutas = true;
      this.checks.verduras = true;
      this.checks.secos = true;
      this.checks.bandejas = true;
    }else{
      this.checks.frutas = false;
      this.checks.verduras = false;
      this.checks.secos = false;
      this.checks.bandejas = false;
    }
    this.enviarChecks();
  }
 
  mostrarVerduras() {
    this.checks.verduras = this.checks.verduras;
    this.enviarChecks();
  }

  mostrarFrutas(){
    this.checks.frutas = this.checks.frutas;
    this.enviarChecks();
  }

  mostrarSecos() {
    this.checks.secos = this.checks.secos;
    this.enviarChecks();
  }

  mostrarBandejas() {
    this.checks.bandeja = this.checks.bandeja;
    this.enviarChecks();
  }
  enviarChecks(){
    this.ch.emit(this.checks);
  }

}
