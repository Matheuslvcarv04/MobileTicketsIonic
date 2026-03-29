import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  senhaGerada: any;

  constructor(private ticketService: TicketService) {}

  gerar(tipo: 'SP' | 'SG' | 'SE') {
    this.senhaGerada = this.ticketService.gerarSenha(tipo);
  }
}
