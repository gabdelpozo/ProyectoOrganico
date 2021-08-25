import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosDispoService {

  tomate = new Producto("verdura","tomate","1k",200,8);
  lechuga = new Producto("verdura","lechuga","1 planta",80,20);
  pepino = new Producto("verdura","pepino","1k",95,7);
  brocoli = new Producto("verdura","brócoli","500g",50,15);
  papa = new Producto("verdura","papa","1k",70,50);

  manzana = new Producto("fruta", "manzana", "1k", 150, 10);
  banana = new Producto("fruta","banana","1k",120,10);
  pera = new Producto("fruta","pera","1k",130,7);

  nueces = new Producto("secos","nueces","100g",150,20);
  almendras = new Producto("secos","almendras","100g",190,6);
  mix = new Producto("secos","mix de frutos secos","100g",90,23);

  sopa = new Producto("bandeja","bandejita para sopa","1",60,4);
  ensalada = new Producto("bandeja","bandejita para ensalada","1",80,3);
  
  organicArray: Producto[] = new Array;
  
  constructor() { }

  ngOnInit(): void{
    this.organicArray.push(this.tomate);
    this.organicArray.push(this.lechuga);
    this.organicArray.push(this.pepino);
    this.organicArray.push(this.brocoli);
    this.organicArray.push(this.papa);
    this.organicArray.push(this.manzana);
    this.organicArray.push(this.banana);
    this.organicArray.push(this.pera);
    this.organicArray.push(this.nueces);
    this.organicArray.push(this.almendras);
    this.organicArray.push(this.mix);
    this.organicArray.push(this.sopa);
    this.organicArray.push(this.ensalada);
  }


  getProductos() {
    return this.organicArray[2].nombre;
  }
}
