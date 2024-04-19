import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  login() {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Iniciando sesión con usuario:', this.username, 'y contraseña:', this.password);
    // Por ejemplo, podrías enviar los datos a un servicio de autenticación
  }


  
}

