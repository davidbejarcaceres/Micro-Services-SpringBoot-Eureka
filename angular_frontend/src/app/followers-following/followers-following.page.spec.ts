import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersFollowingPage } from './followers-following.page';

describe('FollowersFollowingPage', () => {
  let component: FollowersFollowingPage;
  let fixture: ComponentFixture<FollowersFollowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersFollowingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersFollowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
