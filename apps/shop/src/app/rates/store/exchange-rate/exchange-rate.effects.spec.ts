import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExchangeRateEffects } from './exchange-rate.effects';

describe('ExchangeRateEffects', () => {
  let actions$: Observable<any>;
  let effects: ExchangeRateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExchangeRateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ExchangeRateEffects>(ExchangeRateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
