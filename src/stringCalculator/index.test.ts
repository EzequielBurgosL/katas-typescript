import { StringCalculator } from '.';

const TEST_DATA = [
  { stringNum: '4', sum: 4 },
  { stringNum: '1,2', sum: 3 },
  { stringNum: '5,5,5,5', sum: 20 },
  { stringNum: '10\n2,3', sum: 15, separators: ['\n', ','] },
];

describe('StringCalculator', () => {
  describe('GIVEN an empty string', () => {
    it('should return 0', () => {
      const calculator = new StringCalculator();

      expect(calculator.add('')).toBe(0);
    });
  });

  describe('GIVEN an string composed of comma separated numbers', () => {
    describe('WHEN all numbers are positive', () => {
      it('should return the sum of the numbers', () => {
        const calculator = new StringCalculator();

        TEST_DATA.forEach(element => {
          expect(calculator.add(element.stringNum, element.separators)).toBe(
            element.sum,
          );
        });
      });
    });
  });

  describe('WHEN some number/s are negative', () => {
    it('should return an error', () => {
      const calculator = new StringCalculator();

      expect(() => calculator.add('1,-2,-3')).toThrowError(
        'error: negatives not allowed: -2 -3',
      );
    });
  });

  // TODO: step 6 to 9
});
