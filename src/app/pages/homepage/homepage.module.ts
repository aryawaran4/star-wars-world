import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    SearchComponent,
    TableComponent,
    PaginationComponent
  ]
})
export class HomepageModule { }
