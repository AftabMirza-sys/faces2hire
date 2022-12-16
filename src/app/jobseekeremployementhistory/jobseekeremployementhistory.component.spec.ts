import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekeremployementhistoryComponent } from './jobseekeremployementhistory.component';

describe('JobseekeremployementhistoryComponent', () => {
  let component: JobseekeremployementhistoryComponent;
  let fixture: ComponentFixture<JobseekeremployementhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekeremployementhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekeremployementhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
