import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PaymentMethodEffects } from './payment-method.effects';

describe('PaymentMethodEffects', () => {
  let actions$: Observable<any>;
  let effects: PaymentMethodEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentMethodEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PaymentMethodEffects>(PaymentMethodEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
