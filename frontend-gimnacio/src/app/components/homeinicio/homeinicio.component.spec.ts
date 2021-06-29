import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinicioComponent } from './homeinicio.component';

describe('HomeinicioComponent', () => {
  let component: HomeinicioComponent;
  let fixture: ComponentFixture<HomeinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
