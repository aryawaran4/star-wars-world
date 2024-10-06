import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() isLoading: boolean = false; // Add loading state
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  itemsPerPageOptions = [5, 10, 15, 20];

  private pageChangeSubject = new Subject<number>();

  constructor() {
    // Debounce the page change events to avoid rapid clicks
    this.pageChangeSubject.pipe(
      debounceTime(300) // Adjust debounce time as necessary
    ).subscribe((page) => {
      this.pageChange.emit(page);
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChangeSubject.next(page); // Use the subject to emit the page change
    }
  }

  onItemsPerPageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = Number(selectElement.value);
    this.itemsPerPage = value;
    this.itemsPerPageChange.emit(value);
    this.pageChange.emit(1); // Reset to first page when items per page changes
  }
}
