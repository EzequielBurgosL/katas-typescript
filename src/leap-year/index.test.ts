import { isLeapYear } from '.';

const YEARS = [
  { year: 1997, isLeapYear: false },
  { year: 1996, isLeapYear: true },
  { year: 1600, isLeapYear: true },
  { year: 1800, isLeapYear: false },
];

describe('isLeapYear', () => {
  it('should be leap year if divisible by 4', () => {
    expect(isLeapYear(4)).toBe(true);
  });

  it('should be leap year if divisible by 400', () => {
    expect(isLeapYear(400)).toBe(true);
  });

  it('should NOT be leap year if year is not divisible by 4', () => {
    expect(isLeapYear(3)).toBe(false);
  });

  it('should NOT be leap year if year is divisible by 100 and not 400', () => {
    expect(isLeapYear(300)).toBe(false);
  });

  it('should check if multiple years are leap year', () => {
    YEARS.forEach(element => {
      expect(isLeapYear(element.year)).toBe(element.isLeapYear);
    });
  });
});
