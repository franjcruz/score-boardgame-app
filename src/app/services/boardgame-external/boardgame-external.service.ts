import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardgameExternalService {
  apiUrl: string = 'www.boardgameatlas.com/api';
  clientId: string = environment.boardGameAtlasClientId;

  constructor(public http: HttpClient) {}

  findBoardgame(key: string) {
    return this.http.get(
      `https://${this.apiUrl}/search?name=${key}&pretty=true&limit=10&client_id=${this.clientId}`
    );
  }
}
