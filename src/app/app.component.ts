import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularArquitectura';

  nombre: string = '';

  ngOnInit(): void {
    const urlDelIframe = window.location.href;
    console.log('HOLA MUESTRO LA URL ', urlDelIframe);
    window.parent.postMessage({ url: urlDelIframe }, '*');
  }

  onSubmit() {
    console.log('Nombre enviado: ' + this.nombre);
    alert('Nombre enviado: ' + this.nombre);
    this.nombre = ''; // Limpiar el campo después del envío
  }
}
