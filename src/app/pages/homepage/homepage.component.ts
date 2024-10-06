import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { People } from '../../shared/type/swapi.type';
import { SwapiService } from '../../shared/services/swapi/swapi.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

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
  private searchTimeout: any;
  isLoading: boolean = false;

  constructor(
    private _swapiService: SwapiService,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.loadPeople();
    }
  }

  scrollToStarsData(): void {
    const element = document.getElementById('stars-data');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  loadPeople(page: number = this.currentPage): void {
    this.isLoading = true;
    this._swapiService.getEntities<People>('people', page, this.searchTerm).subscribe((response) => {
      this.peoples = response.results;
      this.totalItems = response.count;
      this.isLoading = false;
    });
  }

  onSearch(term: string) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.searchTerm = term;
      this.currentPage = 1;
      this.loadPeople();
    }, 700);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPeople(page);
  }

  onItemsPerPageChange(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.loadPeople();
  }

  onRowClick(item: People): void {
    if (item.url) {
      const urlSegments = item.url.split('/');
      const id = urlSegments[urlSegments.length - 2];
      this._router.navigate(['/people', id]);
    } else {
      console.error('URL is undefined for item:', item);
    }
  }

}
