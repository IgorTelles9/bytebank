import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];
  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service
      .getTransferencias()
      .subscribe((transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
        this.transferencias.sort( (a,b) => (new Date(a.data).getTime() - new Date(b.data).getTime())*-1)
      });
  }
}
