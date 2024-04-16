import { Component,  OnInit } from '@angular/core';
//import * as FileSaver from 'file-saver';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/products.interface';

import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';


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
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule, TreeTableModule, CommonModule, CardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private productService: ProductService) {}

  cols!: Column[];

  products!: Product[];

  selectedProducts!: Product[];

  exportColumns!: ExportColumn[];

  ngOnInit() {

    this.productService.getProductsMini().then((data) => {
      this.products = data;
  });

      this.cols = [
          { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];

      this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
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