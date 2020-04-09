import * as fromPaymentMethod from './payment-method.reducer';
import { selectPaymentMethodState } from './payment-method.selectors';

describe('PaymentMethod Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPaymentMethodState({
      [fromPaymentMethod.paymentMethodFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
