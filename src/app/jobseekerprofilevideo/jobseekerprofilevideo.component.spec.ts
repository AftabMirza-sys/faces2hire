import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerprofilevideoComponent } from './jobseekerprofilevideo.component';

describe('JobseekerprofilevideoComponent', () => {
  let component: JobseekerprofilevideoComponent;
  let fixture: ComponentFixture<JobseekerprofilevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerprofilevideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerprofilevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
