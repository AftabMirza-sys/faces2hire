import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpeopleComponent } from './searchpeople.component';

describe('SearchpeopleComponent', () => {
  let component: SearchpeopleComponent;
  let fixture: ComponentFixture<SearchpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
