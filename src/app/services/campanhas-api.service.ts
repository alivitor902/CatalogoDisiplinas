import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Campanha } from '../models/campanha.model';

export type NovaCampanha = Omit<Campanha, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class CampanhasApiService {
  private readonly urlCampanhas = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.campanhas}`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Campanha[]> {
    return this.httpClient.get<Campanha[]>(this.urlCampanhas).pipe(delay(500));
  }

  getById(id: number): Observable<Campanha> {
    return this.httpClient.get<Campanha>(`${this.urlCampanhas}/${id}`).pipe(delay(500));
  }

  create(campanha: NovaCampanha): Observable<Campanha> {
    return this.httpClient.post<Campanha>(this.urlCampanhas, campanha).pipe(delay(500));
  }

  update(id: number, campanha: NovaCampanha): Observable<Campanha> {
    return this.httpClient.put<Campanha>(`${this.urlCampanhas}/${id}`, campanha).pipe(delay(500));
  }
}
