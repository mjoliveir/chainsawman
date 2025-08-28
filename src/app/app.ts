import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerPrincipal } from './componentes/container-principal/container-principal';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Container2 } from './componentes/container-2/container-2';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ContainerPrincipal, AnimateOnScrollModule, Container2
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'App';
}
