const fourHighest = require('../fourHighest');

describe('fourHighest', () => {
  const errorMessage = 'Invalid input - must be an array of integers'

  it('should return four highest values from an array of integers', () => {
    expect(fourHighest([1, 2, 3, 4, 5])).toMatchObject([5, 4, 3, 2])
  })

  it('should return four highest values from an array of negative integers', () => {
    expect(fourHighest([-1, -2, -3, -4, 0])).toMatchObject([0, -1, -2, -3])
  })

  it('should return an error when an array is not passed in', () => {
    expect(() => { fourHighest(4) }).toThrowError(errorMessage);
  })

  it('should return an error when an empty array is passed in', () => {
    expect(() => { fourHighest([]) }).toThrowError(errorMessage);
  })

  it('should return an error when array elemnts are not integers', () => {
    expect(() => { fourHighest([true, 'not a number', [], {}]) }).toThrowError(errorMessage);
  })
})