import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetResponse } from '../../type/swapi.type';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private apiRoot: string = environment.swapiRootUrl;

  constructor(private http: HttpClient) { }

  getEntities<T>(entity: string): Observable<GetResponse<T[]>> {
    return this.http.get<GetResponse<T[]>>(`${this.apiRoot}${entity}/`);
  }

  getEntityById<T>(entity: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.apiRoot}${entity}/${id}/`);
  }
}
