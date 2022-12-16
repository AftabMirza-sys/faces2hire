import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekereducationComponent } from './jobseekereducation.component';

describe('JobseekereducationComponent', () => {
  let component: JobseekereducationComponent;
  let fixture: ComponentFixture<JobseekereducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekereducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekereducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
