import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';
import { DetalleComponent } from '../Componentes/detalle/detalle.component';
import { ContactoComponent } from '../Componentes/contacto/contacto.component';
import { Usuario } from '../Componentes/contacto/usuario'; 

@Injectable({
  providedIn: 'root'
})
export class ProductosDispoService {

  tomate = new Producto("verdura", "Tomate", "1k", 200, 8, null, "assets/tomate.png", "Los tomates orgánicos no tienen residuos de agroquímicos, no se han usado en su producción hormonas de ningún tipo, y además los agricultores prefieren el uso de semillas orgánicas conservadas por ellos mismos, como son los tomates locales o de herencia o “reliquia”, que son productos con diferentes colores, sabores y formas.");
  lechuga = new Producto("verdura", "Lechuga", "1 planta", 80, 20, null, "assets/lechuga.png", "Tiene contenidos moderados en vitaminas A y B, es rica en potasio, ácido fólico, hierro, calcio, magnesio y antioxidantes. Los principios amargos la hacen indicada para estimular la secreción de la bilis y prevenir los cálculos biliares. Se suele consumir fresca en ensaladas. La escarola tiene un toque amargo, que desagrada a muchos, igual que la endivia, sin embargo es ese toque amargo la clave de su exquisitez cuando se combina con otras hortalizas. Forma parte de las hortalizas que complementan una ensalada, aporta más sabor y su consistencia es delicada y finamente rizada.");
  pepino = new Producto("verdura", "Pepino", "1k", 95, 7, null, "assets/pepino.png", "Pepinos orgánicos tienen mucha diversidad en color, tamaño y forma. Esto es debido a que provienen de semillas naturales polinizadas abiertamentes. Cada planta de pepino es un poquito diferente a de la otra aunque es de la misma especie, y cada generación es diferente a de la anterior, y mas adaptada a su ambiente.");
  brocoli = new Producto("verdura", "Brócoli", "500g", 50, 15, null, "assets/brocoli.png", "Esta hortaliza es rica en nutrientes y posee diversos beneficios al ser consumido. ... También contiene vitamina K, vitaminas del complejo B, vitamina A, magnesio, hierro, zinc, cromo, cobre, potasio, fósforo, proteína, fibra y fito-nutrientes.");
  papa = new Producto("verdura", "Papa", "1k", 70, 50, null, "assets/papa.png", "Las papas orgánicas en fresco, no tienen gusto a tierra, no se deshidratan con facilidad, compactas por su materia seca y no se desarman al hervir.");

  manzana = new Producto("fruta", "Manzana", "1k", 150, 10, null, "assets/manzana.png", "Contiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además, gracias a la presencia de ácido málico y tartárico facilita la digestión de aquellos alimentos que posean un alto contenido en grasas.");
  banana = new Producto("fruta", "Banana", "1k", 120, 10, null, "assets/banana.png", "Descripción de la Banana Orgánica Nombre común Plátano y científico Musa Paradisíaca. Fruta de origen tropical, forma obolonga. Pueden contener de 5 a 20 manos, cada una con 2 a 20 frutos; siendo su color amarillo verdoso o amarillo.");
  pera = new Producto("fruta", "Pera", "1k", 130, 7, null, "assets/pera.png", "¿Qué es una pera orgánica? Es una pera cultivada con un sistema agrícola basado en métodos respetuosos y sustentables con el medio ambiente. Sabrosa, jugosa en su punto justo. El consumo es adecuado para todas las etapas de la vida de las personas.");

  nueces = new Producto("secos", "Nueces", "100g", 150, 20, null, "assets/nueces.png", "Nuez orgánica variedad pecanera (conocida también, como cáscara de papel), sin cáscara, partidas en mitades y cubiertas con caramelo de azúcar orgánico. La nuez es una fuente natural de energía, ácidos grasos monoinsaturados, proteína, fibra y antioxidantes (flavonoides).");
  almendras = new Producto("secos", "Almendras", "100g", 190, 6, null, "assets/almendras.png", "Las almendras son altas en antioxidantes que pueden proteger a las células del daño oxidativo, gran contribuyente al envejecimiento y a varias enfermedades. ... Poseen un alto contenido de grasas saludables mono insaturadas, fibra, proteína y muchos nutrientes escenciales.");
  mix = new Producto("secos", "Mix de frutos secos", "100g", 90, 23, null, "assets/mix.png", "Exquisito snack saludable que aporta fibra, vitaminas y minerales a tu dieta balanceada. El mix Clásico de frutos secos y deshidratados contiene almendras, nueces, pasas rubias y maní (sin sal). Ingredientes: maní, pasas rubias, almendras, nueces.");

  sopa = new Producto("bandeja", "Bandejita para sopa", "1", 60, 4, null, "assets/sopa.png", "Preparación líquida caliente o fría. En su origen, la sopa era una rebanada de pan sobre la que se vertía caldo, vino, una salsa o una preparación líquida. Hoy en día, la sopa es un caldo, a menudo espesado con pan, pasta o arroz, y acompañado con carne o pescado y verduras.");
  ensalada = new Producto("bandeja", "Bandejita para ensalada", "1", 80, 3, null, "assets/ensalada.png", "Las ensaladas contienen vegetales que contienen grandes cantidades de nutrientes y vitaminas como la A, C, potasio, folatos, entre muchos otros más. 2. Hidratan. Sobre todo en las verduras verdes, los vegetales están compuestos por básicamente agua.");

  //organicArray: Producto[] = new Array();
  organicArray: Producto[] = [this.tomate, this.lechuga, this.pepino, this.brocoli, this.papa, this.manzana,
  this.banana, this.pera, this.nueces, this.almendras, this.mix, this.sopa, this.ensalada];

  enCarrito: Producto[] = new Array();

  private productoSeleccionado: Producto;

  private mensajes: any;


  constructor(private http: HttpClient) { 
    /*this.http.get("../../../assets/contacto.json")
    .subscribe(msj =>{
      this.mensajes=msj;
    })
    this.http.get("../../../assets/contacto.json")
      .subscribe(msj => {
        this.mensajes = msj;
      }) */
  }


  ngOnInit() {

  }

  getProductos() {
    return this.organicArray;
  }
  setProductos(x) {
    this.organicArray = x;
  }
  setCantidad(n: string, c: number) {
    this.organicArray.forEach(p => {
      if (p.nombre == n) {
        p.cantidad = p.cantidad - c;
      }
    })
  }
  getCarrito() {
    return this.enCarrito;
  }
  setCarrito(c){
    for(let i:number; i<this.enCarrito.length;i++){
      if(c = this.enCarrito[i].nombre){
        this.enCarrito.splice(i,1);
      }
    }
  }

  getProductoSeleccionado(): Producto {
    return this.productoSeleccionado;
  }

  setProductoSeleccionado(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  getMensajes(){
    console.log(this.http.get('http://localhost:3000/mensajes'))
    return this.http.get('http://localhost:3000/mensajes')
  }
  setMensajes(msj:any){
    this.http.post('http://localhost:3000/mensajes',msj);
    /*let obj = JSON.stringify(this.mensajes);
    let fs = require('fs');
    fs.writeFile('../../../assets/contacto.json',obj);*/
  }
  quitarCantidad(n:string){
    this.organicArray.forEach(p => {
      if (n == p.nombre) {
        p.comprar = null;
      }
    })
  }
 
}
