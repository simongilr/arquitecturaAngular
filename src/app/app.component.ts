import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DockComponent } from './shared/components/dock/dock.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent, ToolbarModule, SplitButtonModule, DockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularArquitectura';

  nombre: string = '';

  ngOnInit(): void {
    this.sendUrl();
  }


  sendUrl () {
    const urlDelIframe = window.location.href;
    console.log('URL ENVIADA ', urlDelIframe);
    window.parent.postMessage({ url: urlDelIframe }, '*');
  }

}
