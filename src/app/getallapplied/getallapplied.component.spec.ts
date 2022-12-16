import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallappliedComponent } from './getallapplied.component';

describe('GetallappliedComponent', () => {
  let component: GetallappliedComponent;
  let fixture: ComponentFixture<GetallappliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallappliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
