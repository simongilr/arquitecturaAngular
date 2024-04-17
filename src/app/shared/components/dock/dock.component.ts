import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule} from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [RouterLink, ToolbarModule, InputTextModule, FormsModule, SplitButtonModule, DockModule, RadioButtonModule, CommonModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class DockComponent  implements OnInit {


dockItems = [
  {
      id: '1',
      label: 'Finder',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg'
  },
  {
      id: '2',
      label: 'Photos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
  },
  {
      id: '3',
      label: 'Git',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg'
  },
  {
      id: '4',
      label: 'Trash',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
  }
];

position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
label: string = 'Select an option';

exe(position:any) {
  console.log('posicion', position);
}

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


ngOnInit() {}
}
