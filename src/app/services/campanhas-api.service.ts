import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Campanha } from '../models/campanha.model';

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
}

