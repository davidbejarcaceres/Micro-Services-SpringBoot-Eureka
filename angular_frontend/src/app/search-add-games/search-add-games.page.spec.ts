import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddGamesPage } from './search-add-games.page';

describe('SearchAddGamesPage', () => {
  let component: SearchAddGamesPage;
  let fixture: ComponentFixture<SearchAddGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
