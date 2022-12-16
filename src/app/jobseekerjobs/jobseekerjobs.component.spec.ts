import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerjobsComponent } from './jobseekerjobs.component';

describe('JobseekerjobsComponent', () => {
  let component: JobseekerjobsComponent;
  let fixture: ComponentFixture<JobseekerjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
