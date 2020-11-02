import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Card } from '../models/card';
import { TinyUrl } from '../models/tinyUrl';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  getTinyUrlsCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseService.getBaseUrl()}/api/v1/fetch/tinyurl/cards`);
  }

  generateTinyUrl(tinyUrlRequest: TinyUrl): Observable<TinyUrl> {
    return this.http.post<TinyUrl>(`${this.baseService.getBaseUrl()}/api/v1/generate/tiny-url`, tinyUrlRequest);
  }

  createTinyURLCard(card: any): Observable<any> {
    return this.http.post<TinyUrl>(`${this.baseService.getBaseUrl()}/api/v1/generate/cards`, card);
  }

  getGroupCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseService.getBaseUrl()}/api/v1/fetch/group/cards`);
  }

  createGroupCard(card: any): Observable<any> {
    return this.http.post<Card[]>(`${this.baseService.getBaseUrl()}/api/v1/generate/group/cards`, card);
  }

  getGroupDetails(cardId: any): Observable<Card> {
    return this.http.get<Card>(`http://localhost:3000/groupCards/${cardId}`);
  }

  addTinyURLCardToGroup(groupId: any, card: any): Observable<any> {
    console.log(card);
    return this.http.patch<Card[]>(`${this.baseService.getBaseUrl()}/api/v1/generate/group/cards/${groupId}`, card);
  }
}
