import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpinnerComponent } from '../../ui/spinner/spinner.component'; // Import SpinnerComponent

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerComponent,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() headers: { name: string, key: string }[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() isLoading: boolean = false;
  @Output() rowClicked = new EventEmitter<any>();

  get paginatedData(): any[] {
    return this.data
  }

  onRowClick(item: any): void {
    this.rowClicked.emit(item);
  }
}
