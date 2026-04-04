import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  senhaAtual: any;

  constructor(
    private ticketService: TicketService
  ) {}

  chamar() {
    this.senhaAtual = this.ticketService.chamarProxima();
  }

}