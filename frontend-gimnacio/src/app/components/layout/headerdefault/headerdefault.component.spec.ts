import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdefaultComponent } from './headerdefault.component';

describe('HeaderdefaultComponent', () => {
  let component: HeaderdefaultComponent;
  let fixture: ComponentFixture<HeaderdefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderdefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
