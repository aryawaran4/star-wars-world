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

  constructor(private _http: HttpClient) { }

  getEntities<T>(entity: string, pageNumber: number, search: string): Observable<GetResponse<T[]>> {
    const params: any = {
      page: pageNumber
    };

    if (search) {
      params.search = search;
    }

    const queryString = new URLSearchParams(params).toString();

    return this._http.get<GetResponse<T[]>>(`${this.apiRoot}${entity}/?${queryString}`);
  }


  getEntityById<T>(entity: string, id: string): Observable<T> {
    return this._http.get<T>(`${this.apiRoot}${entity}/${id}`);
  }

  getEntityByIdDirect<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }
}
