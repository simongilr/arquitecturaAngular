import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule} from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitterModule } from 'primeng/splitter';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink, 
    ToolbarModule, 
    ButtonModule, 
    InputTextModule,
    FormsModule, 
    SplitButtonModule, 
    RadioButtonModule, 
    CommonModule, 
    SidebarModule,
    PanelMenuModule,
    SplitterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

    
/*     buttons = [
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
 */

  showSidebar: boolean = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  items: MenuItem[] = [
    {
        label: '',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Consulta',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/dashboard']
            },
            {
              label: 'Aprobacion',
              icon: 'pi pi-fw pi-bookmark',
            }
        ]
    },
    {
        label: '',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Permisos',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Salir',
                icon: 'pi pi-fw pi-user-minus',
                routerLink: ['/login']
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    }
]

  ngOnInit() {}

}
