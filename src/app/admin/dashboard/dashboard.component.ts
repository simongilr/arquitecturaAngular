import { Component,  OnInit } from '@angular/core';
//import * as FileSaver from 'file-saver';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableoneComponent} from '../../shared/components/tableone/tableone.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SplitterModule } from 'primeng/splitter';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ButtonModule, 
    InputTextModule, 
    TableModule, 
    TreeTableModule, 
    CommonModule, 
    CardModule, 
    TableoneComponent,
    NavBarComponent, 
    FooterComponent,
    SplitterModule 
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor() {}

}