import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplocationComponent } from './emplocation.component';

describe('EmplocationComponent', () => {
  let component: EmplocationComponent;
  let fixture: ComponentFixture<EmplocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
