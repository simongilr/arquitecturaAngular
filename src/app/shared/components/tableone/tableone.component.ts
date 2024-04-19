import { Component,  OnInit, ViewChild } from '@angular/core';
//import * as FileSaver from 'file-saver';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/products.interface';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TooltipModule } from 'primeng/tooltip';

import { Table } from 'primeng/table';



interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}


@Component({
  selector: 'app-tableone',
  standalone: true,
  imports: [ButtonModule, 
    InputTextModule, 
    TableModule, 
    TreeTableModule, 
    CommonModule,
    CardModule, 
    PaginatorModule, 
    ScrollerModule, 
    ScrollPanelModule,
    ScrollTopModule, 
    TooltipModule],
  templateUrl: './tableone.component.html',
  styleUrl: './tableone.component.css'
})
export class TableoneComponent implements OnInit{

  @ViewChild('dt') dt: any; 


  constructor(private productService: ProductService) {}

  cols!: Column[];
  products!: Product[];
  selectedProducts!: Product[];
  exportColumns!: ExportColumn[];
  totalRecords: number = 0; 
  totalQuantity: number = 0;
  totalAmount: number = 0;

  
  buttons = [
    { icon: 'pi pi-file', clickHandler: () => this.dt.exportCSV(), tooltip: 'CSV', class: 'mr-2' },
    { icon: 'pi pi-file-excel', clickHandler: () => this.exportExcel(), tooltip: 'XLS', class: 'p-button-success mr-2' },
    { icon: 'pi pi-file-pdf', clickHandler: () => this.exportPdf(), tooltip: 'PDF', class: 'p-button-warning mr-2' },
    { icon: 'pi pi-filter', clickHandler: () => this.dt.exportCSV({ selectionOnly: true }), tooltip: 'Selection Only', class: 'p-button-info ml-auto' }
];

  ngOnInit() {

    this.productService.getProductsMini().then((data) => {
      this.products = data;
      this.totalRecords = this.products.length; 
      this.totals();
    });
  
    this.cols = [
        { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];
    
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }
    
 selectCheck(value:any) {
  console.log('value check : ', value);

 }

  // Calcula los totales en función de tus datos
  totals(): void {
    // Reinicia los totales a cero
    this.totalQuantity = 0;

    // Calcula los totales sumando los valores de cada fila
    this.products.forEach((product:any) => {
      this.totalQuantity += product.quantity;
    });
  }

  clear(table: Table) {
    table.clear();
  }
  globalFilter: string = ''; // Definición de la propiedad globalFilter

  applyGlobalFilter(event: any) {
    if (event?.target?.value) {
      this.dt.filterGlobal(event.target.value, 'contains');
    } 
  }
  
  exportPdf() {
/*       import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then((x) => {
              const doc = new jsPDF.default('p', 'px', 'a4');
              (doc as any).autoTable(this.exportColumns, this.products);
              doc.save('products.pdf');
          });
      }); */
  }

  exportExcel() {
/*       import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.products);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, 'products');
      }); */
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
/*       let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
 */
    }
}