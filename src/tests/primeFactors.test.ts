import { primeFactorsV1 } from '../core/primeFactors';

describe('Prime factors version 1 should', () => {
  it('calculate the prime factors for number 0', () => {
    expect(primeFactorsV1(0)).toEqual([0]);
  });
  it('calculate the prime factors for number 1', () => {
    expect(primeFactorsV1(1)).toEqual([1]);
  });
  it('calculate the prime factors for number 2', () => {
    expect(primeFactorsV1(2)).toEqual([2]);
  });
});
