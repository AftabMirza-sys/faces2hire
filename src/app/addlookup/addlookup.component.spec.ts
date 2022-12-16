import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlookupComponent } from './addlookup.component';

describe('AddlookupComponent', () => {
  let component: AddlookupComponent;
  let fixture: ComponentFixture<AddlookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
