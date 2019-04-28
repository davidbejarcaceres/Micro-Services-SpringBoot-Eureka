import { TestBed } from '@angular/core/testing';

import { GamesServiceService } from './games-service.service';

describe('GamesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesServiceService = TestBed.get(GamesServiceService);
    expect(service).toBeTruthy();
  });
});
