import { Component,  OnInit } from '@angular/core';
//import * as FileSaver from 'file-saver';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableoneComponent} from '../../shared/components/tableone/tableone.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule, TreeTableModule, CommonModule, CardModule, TableoneComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor() {}

}