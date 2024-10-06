import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwapiService } from '../../shared/services/swapi/swapi.service';
import { isPlatformBrowser } from '@angular/common';
import { Film, People, Planet, Species, Starship, Vehicle } from '../../shared/type/swapi.type';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  people!: People;
  starships: Starship[] = [];
  vehicles: Vehicle[] = [];
  films: Film[] = [];
  species: Species[] = [];
  homeworld!: Planet;
  isLoading: boolean = false;
  id: string = '';

  loadingState = {
    homeworld: false,
    films: false,
    species: false,
    vehicles: false,
    starships: false
  };

  constructor(
    private _swapiService: SwapiService,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.loadDetails(this.id);
    }
  }

  goBack() {
    this._router.navigate(['homepage'])
  }

  loadDetails(id: string): void {
    this.isLoading = true;
    this._swapiService.getEntityById<People>('people', id).subscribe((response) => {
      this.people = response;
      this.isLoading = false;
      this.fetchAdditionalDetails();
    });
  }

  fetchAdditionalDetails(): void {
    // Fetch Homeworld
    if (this.people.homeworld) {
      this.loadingState.homeworld = true;
      this._swapiService.getEntityByIdDirect<Planet>(this.people.homeworld)
        .subscribe((response) => {
          this.loadingState.homeworld = false;
          this.homeworld = response;
        });
    }

    // Fetch Films
    if (this.people.films.length) {
      this.loadingState.films = true;
      forkJoin(this.people.films.map(film => this._swapiService.getEntityByIdDirect<Film>(film)))
        .subscribe((responses) => {
          this.loadingState.films = false;
          this.films = responses;
        });
    }

    // Fetch Species
    if (this.people.species.length) {
      this.loadingState.species = true;
      forkJoin(this.people.species.map(species => this._swapiService.getEntityByIdDirect<Species>(species)))
        .subscribe((responses) => {
          this.loadingState.species = false;
          this.species = responses;
        });
    }

    // Fetch Vehicles
    if (this.people.vehicles.length) {
      this.loadingState.vehicles = true;
      forkJoin(this.people.vehicles.map(vehicle => this._swapiService.getEntityByIdDirect<Vehicle>(vehicle)))
        .subscribe((responses) => {
          this.loadingState.vehicles = false;
          this.vehicles = responses;
        });
    }

    // Fetch Starships
    if (this.people.starships.length) {
      this.loadingState.starships = true;
      forkJoin(this.people.starships.map(starship => this._swapiService.getEntityByIdDirect<Starship>(starship)))
        .subscribe((responses) => {
          this.loadingState.starships = false;
          this.starships = responses;
        });
    }
  }

}
