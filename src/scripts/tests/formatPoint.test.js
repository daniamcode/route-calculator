import formatPoint from '../formatPoint';

describe('formatPoint function', () => {
  it('should return right message for case 400', () => {
    const entry = "42,1";
    const result = {lat: 42, lng: 1}

    expect(formatPoint(entry)).toEqual(result);
  })
})