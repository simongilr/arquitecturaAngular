import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule} from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, ToolbarModule, ButtonModule, InputTextModule, FormsModule, SplitButtonModule, RadioButtonModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

    
    buttons = [
        { icon: 'pi pi-plus', label: '', routerLink: ['/dashboard'], slot: 'start' },
        { icon: 'pi pi-save', label: '', routerLink: ['/articles'], slot: 'start'},
        { icon: 'pi pi-times', label: '', routerLink: ['/articles', 'detalle'], slot: 'start' },
        { icon: 'pi pi-step-backward', label: '', routerLink: ['/dashboard', 'calendar'], slot: 'start' },
        { icon: 'pi pi-print', label: '', routerLink: ['/dashboard', 'calendar'], slot: 'end' },
        { icon: 'pi pi-file-excel', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-folder', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-shield', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-th-large', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi-arrow-circle-down', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-sign-in', label: '', routerLink: ['/login'], slot: 'end' },
        { icon: 'pi pi-file-export', label: '', routerLink: '', slot: 'end' },
        { icon: 'pi pi-sign-in', label: '', routerLink: ['/login'], slot: 'end' }
    ];


  ngOnInit() {}

}
