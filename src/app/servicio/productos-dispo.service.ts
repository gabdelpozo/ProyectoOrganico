import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosDispoService {

  tomate = new Producto("verdura", "tomate", "1k", 200, 8, "assets/tomate.png");
  lechuga = new Producto("verdura", "lechuga", "1 planta", 80, 20, "assets/lechuga.png");
  pepino = new Producto("verdura", "pepino", "1k", 95, 7, "assets/pepino.png");
  brocoli = new Producto("verdura", "brócoli", "500g", 50, 15, "assets/brocoli.png");
  papa = new Producto("verdura", "papa", "1k", 70, 50, "assets/papa.png");

  manzana = new Producto("fruta", "manzana", "1k", 150, 10, "assets/manzana.png");
  banana = new Producto("fruta", "banana", "1k", 120, 10, "assets/banana.png");
  pera = new Producto("fruta", "pera", "1k", 130, 7, "assets/pera.png");

  nueces = new Producto("secos", "nueces", "100g", 150, 20, "assets/nueces.png");
  almendras = new Producto("secos", "almendras", "100g", 190, 6, "assets/almendras.png");
  mix = new Producto("secos", "mix de frutos secos", "100g", 90, 23, "assets/mix.png");

  sopa = new Producto("bandeja", "bandejita para sopa", "1", 60, 4, "assets/sopa.png");
  ensalada = new Producto("bandeja", "bandejita para ensalada", "1", 80, 3, "assets/ensalada.png");

  //organicArray: Producto[] = new Array();
  organicArray: Producto[] = [this.tomate, this.lechuga, this.pepino, this.brocoli, this.papa, this.manzana,
  this.banana, this.pera, this.nueces, this.almendras, this.mix, this.sopa, this.ensalada];

  constructor() { }

  ngOnInit() {
  }

  getProductos() {
    return this.organicArray;
  }
  setProductos(x){
    this.organicArray = x;
  }
 
}
