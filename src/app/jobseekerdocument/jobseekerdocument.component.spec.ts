import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerdocumentComponent } from './jobseekerdocument.component';

describe('JobseekerdocumentComponent', () => {
  let component: JobseekerdocumentComponent;
  let fixture: ComponentFixture<JobseekerdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
