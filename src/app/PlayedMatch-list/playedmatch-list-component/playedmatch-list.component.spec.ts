import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedmatchListComponent } from './playedmatch-list.component';

describe('PlayedmatchListComponentComponent', () => {
  let component: PlayedmatchListComponent;
  let fixture: ComponentFixture<PlayedmatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedmatchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedmatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
