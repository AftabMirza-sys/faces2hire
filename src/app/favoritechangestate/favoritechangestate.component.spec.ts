import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritechangestateComponent } from './favoritechangestate.component';

describe('FavoritechangestateComponent', () => {
  let component: FavoritechangestateComponent;
  let fixture: ComponentFixture<FavoritechangestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritechangestateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritechangestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
