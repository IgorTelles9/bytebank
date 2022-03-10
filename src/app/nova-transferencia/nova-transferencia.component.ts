import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  
  @Output() onTransferir = new EventEmitter();
  
  valor: number;
  destino: string; 

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Solicitada nova transferência.')
    const params: Transferencia = {
        valor: this.valor,
        destino: this.destino,
        data: new Date()
    }
   this.service.adicionar(params).subscribe({
    next: () => this.router.navigateByUrl('extrato'),
    error: (error) => console.error(error)
   })
   
  }

}
