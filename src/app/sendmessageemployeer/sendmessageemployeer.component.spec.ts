import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmessageemployeerComponent } from './sendmessageemployeer.component';

describe('SendmessageemployeerComponent', () => {
  let component: SendmessageemployeerComponent;
  let fixture: ComponentFixture<SendmessageemployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmessageemployeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendmessageemployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
