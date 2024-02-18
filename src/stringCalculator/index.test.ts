import { StringCalculator } from '.';

const TEST_DATA = [
  { stringNum: '4', sum: 4 },
  { stringNum: '1,2', sum: 3 },
  { stringNum: '5,5,5,5', sum: 20 },
  { stringNum: '10,7,2,1,5', sum: 25 },
];

describe('StringCalculator', () => {
  describe('GIVEN an empty string', () => {
    it('should return 0', () => {
      const calculator = new StringCalculator();

      expect(calculator.add('')).toBe(0);
    });
  });

  describe('GIVEN an string composed of comma separated numbers', () => {
    it('should return the sum of the numbers', () => {
      const calculator = new StringCalculator();

      TEST_DATA.forEach(element => {
        expect(calculator.add(element.stringNum)).toBe(element.sum);
      });
    });
  });
});
