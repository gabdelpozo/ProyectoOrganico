export class Producto{
    id: number;
    tipo: string;
    nombre: string;
    unidad: string;
    precio: number;
    cantidad: number;
    comprar: number;
    foto: string;
    descripcion: string;
    
    
    constructor(tipo?: string, nombre?: string, unidad?: string, precio?: number, cantidad?: number, comprar?:number, foto?:string, descripcion?: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.unidad = unidad;
        this.precio = precio;
        this.cantidad = cantidad;
        this.comprar = comprar;
        this.foto = foto;
        this.descripcion = descripcion;
    }

}


