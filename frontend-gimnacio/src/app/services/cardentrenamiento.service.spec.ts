import { TestBed } from '@angular/core/testing';

import { CardentrenamientoService } from './cardentrenamiento.service';

describe('CardentrenamientoService', () => {
  let service: CardentrenamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardentrenamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
