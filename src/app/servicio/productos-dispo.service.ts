import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosDispoService {

  tomate = new Producto("verdura", "Tomate", "1k", 200, 8, null, "assets/tomate.png");
  lechuga = new Producto("verdura", "Lechuga", "1 planta", 80, 20, null, "assets/lechuga.png");
  pepino = new Producto("verdura", "Pepino", "1k", 95, 7, null, "assets/pepino.png");
  brocoli = new Producto("verdura", "Brócoli", "500g", 50, 15, null, "assets/brocoli.png");
  papa = new Producto("verdura", "Papa", "1k", 70, 50, null, "assets/papa.png");

  manzana = new Producto("fruta", "Manzana", "1k", 150, 10, null, "assets/manzana.png");
  banana = new Producto("fruta", "Banana", "1k", 120, 10, null, "assets/banana.png");
  pera = new Producto("fruta", "Pera", "1k", 130, 7, null, "assets/pera.png");

  nueces = new Producto("secos", "Nueces", "100g", 150, 20, null, "assets/nueces.png");
  almendras = new Producto("secos", "Almendras", "100g", 190, 6, null, "assets/almendras.png");
  mix = new Producto("secos", "Mix de frutos secos", "100g", 90, 23, null, "assets/mix.png");

  sopa = new Producto("bandeja", "Bandejita para sopa", "1", 60, 4, null, "assets/sopa.png");
  ensalada = new Producto("bandeja", "Bandejita para ensalada", "1", 80, 3, null, "assets/ensalada.png");

  //organicArray: Producto[] = new Array();
  organicArray: Producto[] = [this.tomate, this.lechuga, this.pepino, this.brocoli, this.papa, this.manzana,
  this.banana, this.pera, this.nueces, this.almendras, this.mix, this.sopa, this.ensalada];

  enCarrito: Producto[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  getProductos() {
    return this.organicArray;
  }
  setProductos(x){
    this.organicArray = x;
  }
<<<<<<< Updated upstream
  setCantidad(n:string, c:number){
    this.organicArray.forEach(p => {
      if(p.nombre == n){
        p.cantidad = p.cantidad - c;
      }
    })
  }
  getCarrito(){
    return this.enCarrito;
  }
=======
>>>>>>> Stashed changes
 
}
