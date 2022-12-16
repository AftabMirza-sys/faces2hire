import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeaddfavoriteComponent } from './employeeaddfavorite.component';

describe('EmployeeaddfavoriteComponent', () => {
  let component: EmployeeaddfavoriteComponent;
  let fixture: ComponentFixture<EmployeeaddfavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeaddfavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeaddfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
