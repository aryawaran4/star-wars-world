import { Component, OnInit, Renderer2 } from '@angular/core';
import { People } from '../../shared/type/swapi.type';
import { SwapiService } from '../../shared/services/swapi/swapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  peoples: People[] = [];
  headers: { name: string; key: string; }[] = [
    { name: 'Name', key: 'name' },
    { name: 'Gender', key: 'gender' },
    { name: 'Birth Year', key: 'birth_year' },
    { name: 'Height (Cm)', key: 'height' }
  ];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  searchTerm: string = '';
  private searchTimeout: any; // Variable to hold the timeout ID
  isLoading: boolean = false; // Loading state

  constructor(
    private swapiService: SwapiService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  scrollToStarsData(): void {
    const element = document.getElementById('stars-data');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  loadPeople(page: number = this.currentPage): void {
    this.isLoading = true; // Set loading state to true
    this.swapiService.getEntities<People>('people', page, this.searchTerm).subscribe((response) => {
      this.peoples = response.results;
      this.totalItems = response.count;
      this.isLoading = false; // Set loading state to false
    });
  }

  onSearch(term: string) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.searchTerm = term;
      this.currentPage = 1; // Reset to the first page
      this.loadPeople(); // Reload people based on the new search term
    }, 700);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPeople(page); // Fetch data for the selected page
  }

  onItemsPerPageChange(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Reset to the first page
    this.loadPeople(); // Reload people based on the new items per page
  }
}
