import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent, ButtonModule, InputTextModule, FormsModule, ToolbarModule, SplitButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularArquitectura';

  nombre: string = '';
  items: MenuItem[] | undefined;


  ngOnInit(): void {
    this.sendUrl();
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      }
  ];
  }



  onSubmit() {
    console.log('Nombre enviado: ' + this.nombre);
    alert('Nombre enviado: ' + this.nombre);
    this.nombre = ''; 
  }

  sendUrl () {
    const urlDelIframe = window.location.href;
    console.log('URL ENVIADA ', urlDelIframe);
    window.parent.postMessage({ url: urlDelIframe }, '*');
  }

}
