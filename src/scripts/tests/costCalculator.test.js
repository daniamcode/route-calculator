import costCalculator from '../costCalculator';

describe('costCalculator function', () => {
  it('should return right result for "car"', () => {
    const distance = 100;
    const costRatio = 5;
    const vehicle = 'car';
    const result = 500

    expect(costCalculator(distance, costRatio, vehicle)).toEqual(result);
  })
  it('should return right result for "van"', () => {
    const distance = 100;
    const costRatio = 5;
    const vehicle = 'van';
    const result = 525

    expect(costCalculator(distance, costRatio, vehicle)).toEqual(result);
  })
  it('should return right result for "truck"', () => {
    const distance = 100;
    const costRatio = 5;
    const vehicle = 'truck';
    const result = 550

    expect(costCalculator(distance, costRatio, vehicle)).toEqual(result);
  })
})