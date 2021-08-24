export class Producto{
    tipo: string;
    nombre: string;
    unidad: string;
    precio: number;
    cantidad: number;

    constructor(tipo: string, nombre: string, unidad: string, precio: number, cantidad: number){
        this.tipo = tipo;
        this.nombre = nombre;
        this.unidad = unidad;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
