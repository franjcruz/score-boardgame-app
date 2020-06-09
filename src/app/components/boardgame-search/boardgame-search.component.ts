import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Searchbar } from 'ionic-angular';
import { Boardgame } from 'src/app/models/boardgame';

import { BoardgameExternalService } from './../../services/boardgame-external/boardgame-external.service';
import { BoardgameService } from './../../services/boardgame/boardgame.service';

@Component({
  selector: 'app-boardgame-search',
  templateUrl: './boardgame-search.component.html',
  styleUrls: ['./boardgame-search.component.scss'],
})
export class BoardgameSearchComponent implements OnInit {
  boardgamesSearch: any;
  boardgamesList: Boardgame[];

  @ViewChild('boardgameSearchbar') searchbar: Searchbar;

  constructor(
    private boardgameExternalService: BoardgameExternalService,
    private boardgameService: BoardgameService
  ) {}

  ngOnInit() {
    this.boardgameService.list().subscribe((data: Boardgame[]) => {
      this.boardgamesList = data;
    });
  }

  searchBoardgame(evt) {
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.boardgamesSearch = this.boardgameExternalService
      .findBoardgame(searchTerm)
      .subscribe((data: any[]) => {
        this.boardgamesSearch = data;
      });
  }

  addBoardgame(data: any) {
    // TODO: Check if boardgame already exists, in this case, update it instead of creating
    let newBoardgame: Boardgame;

    newBoardgame = {
      externalId: data.id,
      name: data.name,
      images: data.images,
      description: data.description,
      designers: data.designers,
      rules_url: data.rules_url,
    };

    this.boardgameService.create(newBoardgame);

    this.boardgamesSearch = null;
    this.searchbar.value = '';
  }
}
