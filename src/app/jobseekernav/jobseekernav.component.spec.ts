import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekernavComponent } from './jobseekernav.component';

describe('JobseekernavComponent', () => {
  let component: JobseekernavComponent;
  let fixture: ComponentFixture<JobseekernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekernavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
