import getFee from '../getFee';

describe('getFee function', () => {
  it('should return right result for case "car"', () => {
    const vehicle = 'car';
    const result = 0

    expect(getFee(vehicle)).toEqual(result);
  })
  it('should return right result for case "van"', () => {
    const vehicle = 'van';
    const result = 0.25

    expect(getFee(vehicle)).toEqual(result);
  })
  it('should return right result for case "truck"', () => {
    const vehicle = 'truck';
    const result = 0.5

    expect(getFee(vehicle)).toEqual(result);
  })
  it('should return right result for default case', () => {
    const vehicle = 'whatever';
    const result = undefined

    expect(getFee(vehicle)).toEqual(result);
  })
})