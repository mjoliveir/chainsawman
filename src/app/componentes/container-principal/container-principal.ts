import { Component, input, OnInit } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-principal',
  imports: [FloatLabelModule, ToastModule, ButtonModule, FormsModule, CommonModule],
  templateUrl: './container-principal.html',
  styleUrl: './container-principal.css',
  providers: [MessageService],
})
export class ContainerPrincipal {
  constructor(private messageService: MessageService) {}

  showSuccess(formEmail: NgForm) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Você receberá um email de confirmação, por favor verifique seu email' });
    if (formEmail.valid){
      formEmail.reset()
    }
  }
}
