import { Transferencia } from './../models/transferencia.model';
import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = `${env.backendHost}:${env.backendPort}/${env.transferenciasEndpoint}`
  
  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
   }

  //  get transferencias () {
  //    return this.listaTransferencias;
  //  }

   getTransferencias () : Observable<Transferencia[]> {
     return this.httpClient.get<Transferencia[]>(this.url)
   }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    return this.httpClient.post<Transferencia>(this.url,transferencia)
  }
}
