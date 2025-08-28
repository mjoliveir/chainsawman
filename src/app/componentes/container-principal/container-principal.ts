import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-container-principal',
  imports: [FloatLabelModule, ToastModule, ButtonModule],
  templateUrl: './container-principal.html',
  styleUrl: './container-principal.css',
  providers: [MessageService],
})
export class ContainerPrincipal {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
  }
}
