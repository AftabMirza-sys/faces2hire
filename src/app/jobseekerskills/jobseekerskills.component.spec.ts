import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerskillsComponent } from './jobseekerskills.component';

describe('JobseekerskillsComponent', () => {
  let component: JobseekerskillsComponent;
  let fixture: ComponentFixture<JobseekerskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
