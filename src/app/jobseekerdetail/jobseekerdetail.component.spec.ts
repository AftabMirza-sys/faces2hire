import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerdetailComponent } from './jobseekerdetail.component';

describe('JobseekerdetailComponent', () => {
  let component: JobseekerdetailComponent;
  let fixture: ComponentFixture<JobseekerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
