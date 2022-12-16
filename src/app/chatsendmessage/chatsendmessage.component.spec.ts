import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsendmessageComponent } from './chatsendmessage.component';

describe('ChatsendmessageComponent', () => {
  let component: ChatsendmessageComponent;
  let fixture: ComponentFixture<ChatsendmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsendmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsendmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
