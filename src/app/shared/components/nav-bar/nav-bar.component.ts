import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule} from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, ToolbarModule, ButtonModule, InputTextModule, FormsModule, SplitButtonModule, DockModule, RadioButtonModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

    buttons = [
        { icon: 'pi pi-home', label: '', routerLink: ['/articles'], slot: 'start'},
        { icon: 'pi pi-info-circle', label: '', routerLink: ['/articles', 'detalle'], slot: 'start' },
        { icon: 'pi pi-folder', label: '', routerLink: ['/dashboard'], slot: 'start' },
        { icon: 'pi pi-calendar', label: '', routerLink: ['/dashboard', 'calendar'], slot: 'start' },
        { icon: 'pi pi-save', label: '', routerLink: ['/dashboard', 'calendar'], slot: 'start' },
        { icon: 'pi-arrow-circle-down', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-sign-in', label: '', routerLink: ['/login'], slot: 'end' },
        { icon: 'pi pi-file-excel', label: '', routerLink: ['/register'], slot: 'end' },
        { icon: 'pi pi-file-export', label: '', routerLink: '', slot: 'end' },
        { icon: 'pi pi-sign-in', label: '', routerLink: ['/login'], slot: 'end' }

    ];

  dockItems = [
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
    }
];

  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  label: string = 'Select an option';

  positionOptions = [
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
];


  ngOnInit() {

  }
}
