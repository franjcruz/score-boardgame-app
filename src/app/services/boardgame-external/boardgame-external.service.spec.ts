import { TestBed } from '@angular/core/testing';

import { BoardgameExternalService } from './boardgame-external.service';

describe('BoardgameExternalService', () => {
  let service: BoardgameExternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardgameExternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
