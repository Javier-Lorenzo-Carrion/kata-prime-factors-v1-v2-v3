import { primeFactorsV1, primeFactorsV2 } from '../core/primeFactors';

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
  it('calculate the prime factors for number 3', () => {
    expect(primeFactorsV1(3)).toEqual([3]);
  });
  it('calculate the prime factors for number 4', () => {
    expect(primeFactorsV1(4)).toEqual([2,2]);
  });
  it('calculate the prime factors for number 60', () => {
    expect(primeFactorsV1(60)).toEqual([2,2,3,5]);
  });
  it('calculate the prime factors for number 7', () => {
    expect(primeFactorsV1(7)).toEqual([7]);
  });
});

describe('Prime factors version 2 should', () => {
  it('calculate the prime factors for number 0', () => {
    expect(primeFactorsV2(0)).toEqual([0]);
  });
  it('calculate the prime factors for number 1', () => {
    expect(primeFactorsV2(1)).toEqual([1]);
  });
  it('calculate the prime factors for number 2', () => {
    expect(primeFactorsV2(2)).toEqual([2]);
  });
  it('calculate the prime factors for number 3', () => {
    expect(primeFactorsV2(3)).toEqual([3]);
  });
  it('calculate the prime factors for number 4', () => {
    expect(primeFactorsV2(4)).toEqual([2,2]);
  });
});
