import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  
  getProducts(controller){
    return this.httpClient.get(this.url+controller);
  }

  insertProduct(controller, product){
    return this.httpClient.post(this.url + controller, product)
  }

  setProduct(controller, product){
    return this.httpClient.put(this.url + controller + "/" + product.id, product)
  }

  deleteProduct(controller, product){
    return this.httpClient.delete(this.url + controller + "/" + product.id);
  }



}
