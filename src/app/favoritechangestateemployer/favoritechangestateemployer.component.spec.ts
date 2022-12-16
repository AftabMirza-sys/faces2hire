import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritechangestateemployerComponent } from './favoritechangestateemployer.component';

describe('FavoritechangestateemployerComponent', () => {
  let component: FavoritechangestateemployerComponent;
  let fixture: ComponentFixture<FavoritechangestateemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritechangestateemployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritechangestateemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
