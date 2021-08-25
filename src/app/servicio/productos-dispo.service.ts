import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosDispoService {

  tomate = new Producto("verdura", "tomate", "1k", 200, 8);
  lechuga = new Producto("verdura", "lechuga", "1 planta", 80, 20);
  pepino = new Producto("verdura", "pepino", "1k", 95, 7);
  brocoli = new Producto("verdura", "brócoli", "500g", 50, 15);
  papa = new Producto("verdura", "papa", "1k", 70, 50);

  manzana = new Producto("fruta", "manzana", "1k", 150, 10);
  banana = new Producto("fruta", "banana", "1k", 120, 10);
  pera = new Producto("fruta", "pera", "1k", 130, 7);

  nueces = new Producto("secos", "nueces", "100g", 150, 20);
  almendras = new Producto("secos", "almendras", "100g", 190, 6);
  mix = new Producto("secos", "mix de frutos secos", "100g", 90, 23);

  sopa = new Producto("bandeja", "bandejita para sopa", "1", 60, 4);
  ensalada = new Producto("bandeja", "bandejita para ensalada", "1", 80, 3);

  //organicArray: Producto[] = new Array();
  organicArray: Producto[] = [this.tomate, this.lechuga, this.pepino, this.brocoli, this.papa, this.manzana,
  this.banana, this.pera, this.nueces, this.almendras, this.mix, this.sopa, this.ensalada];

  constructor() { }

  ngOnInit(): void {
    
  }


  getProductos() {
    return this.organicArray;
  }
}
