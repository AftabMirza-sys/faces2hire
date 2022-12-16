import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyprofileinfoComponent } from './companyprofileinfo.component';

describe('CompanyprofileinfoComponent', () => {
  let component: CompanyprofileinfoComponent;
  let fixture: ComponentFixture<CompanyprofileinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyprofileinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyprofileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
