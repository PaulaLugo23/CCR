import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedidos } from '../models/pedidos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class pedidosService   {
  selectedPedidos: Pedidos;
  //Pedidos : Pedidos[];
  readonly URL_API = "http://localhost:4000/"

  constructor(private http:HttpClient) {
    this.selectedPedidos = new Pedidos();
  }

  postPedido(Pedidos:Pedidos) {
    return this.http.post('http://localhost:4000/crearp', Pedidos);
  }

  getPedidos(): Observable <any>{
    return this.http.get("http://localhost:4000/verp/:id?");
  }

  putPedido(carrera:Pedidos) {
    return this.http.put('http://localhost:4000/guardaCarrera' + `/${carrera._id}` , carrera);
  }

deletePedido(_id:String) {
  return this.http.delete('http://localhost:4000/borraCarrera' + `/${_id}`);
  }
}
