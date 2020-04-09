import * as fromExchangeRate from './exchange-rate.actions';

describe('loadExchangeRates', () => {
  it('should return an action', () => {
    expect(fromExchangeRate.loadExchangeRates().type).toBe('[ExchangeRate] Load ExchangeRates');
  });
});
