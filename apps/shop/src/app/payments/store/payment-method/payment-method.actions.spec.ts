import * as fromPaymentMethod from './payment-method.actions';

describe('loadPaymentMethods', () => {
  it('should return an action', () => {
    expect(fromPaymentMethod.loadPaymentMethods().type).toBe('[PaymentMethod] Load PaymentMethods');
  });
});
