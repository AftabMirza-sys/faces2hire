import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycorporateComponent } from './companycorporate.component';

describe('CompanycorporateComponent', () => {
  let component: CompanycorporateComponent;
  let fixture: ComponentFixture<CompanycorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycorporateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
