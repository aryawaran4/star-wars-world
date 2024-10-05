import { Component } from '@angular/core';
import { People } from '../../shared/type/swapi.type';
import { SwapiService } from '../../shared/services/swapi/swapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  peoples: People[] = [];
  headers: string[] = ['name', 'gender', 'height'];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  searchTerm: string = '';

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.swapiService.getEntities<People>('people').subscribe((data) => {
      this.peoples = data.results;
    });
  }

  get filteredData(): People[] {
    return this.peoples.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPeople();
  }
}
