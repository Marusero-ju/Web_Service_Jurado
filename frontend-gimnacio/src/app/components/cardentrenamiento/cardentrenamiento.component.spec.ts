import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardentrenamientoComponent } from './cardentrenamiento.component';

describe('CardentrenamientoComponent', () => {
  let component: CardentrenamientoComponent;
  let fixture: ComponentFixture<CardentrenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardentrenamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardentrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
