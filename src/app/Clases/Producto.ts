export class Producto{
    tipo: string;
    nombre: string;
    unidad: string;
    precio: number;
    cantidad: number;
    comprar: number;
    foto: string;

    constructor(tipo: string, nombre: string, unidad: string, precio: number, cantidad: number, comprar:number, foto:string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.unidad = unidad;
        this.precio = precio;
        this.cantidad = cantidad;
        this.comprar = comprar;
        this.foto = foto;
    }

}
