import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobseekerComponent } from './searchjobseeker.component';

describe('SearchjobseekerComponent', () => {
  let component: SearchjobseekerComponent;
  let fixture: ComponentFixture<SearchjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchjobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
