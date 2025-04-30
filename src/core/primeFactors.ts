export function primeFactorsV1(number: number): number[] {

  if(number <= 1) return [number];

  let dividend: number = number;
  let divisor: number = 2;
  const primeFactors: number[] = [];

  do {
    if (dividend % divisor === 0) {
      primeFactors.push(divisor);
      dividend = dividend / divisor;
    } else {
      divisor = divisor + 1;
    }
  } while (dividend > 1);
  return primeFactors;
}
