import { getLocaleFirstDayOfWeek } from "@angular/common";
import { Pedido } from "../shared/pedido.model";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { URL_API } from "../app.api";

@Injectable()
export class OrdemCompraService{

constructor(private http: HttpClient){
}



    public efetivarCompra(pedido: Pedido): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders()  
    headers.append('Content-type', 'application/json')
      return this.http.post(
        `${URL_API}/pedidos`,
        pedido,
        { headers: headers }
      )
      .pipe(map((resposta: any) => {
          resposta.id       
      }))
      }
}
    