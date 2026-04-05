import { Component } from '@angular/core';
import { TicketService, Ticket } from '../services/ticket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  senhaGerada: any;

  ultimas: Ticket[] = [];

  ionViewDidEnter() {
    setInterval(() => {
      this.ultimas = this.ticketService.getUltimasChamadas();
    }, 1000);
  }

  constructor(private ticketService: TicketService) {}

  gerar(tipo: 'SP' | 'SG' | 'SE') {
    this.senhaGerada = this.ticketService.gerarSenha(tipo);
  }
}
