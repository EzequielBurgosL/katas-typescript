import { getLyrics } from '.';

describe('Twelve Days of Christmas', () => {
  it('should return the correct lyrics for the first day of Christmas', () => {
    expect(getLyrics(1)).toBe(
      'On the first day of Christmas, my true love gave to me: a Partridge in a Pear Tree',
    );
  });

  it('should return the correct lyrics for the second day of Christmas', () => {
    expect(getLyrics(2)).toBe(
      'On the second day of Christmas, my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree',
    );
  });

  it('should return the correct lyrics for the twelve day of Christmas', () => {
    expect(getLyrics(12)).toBe(
      'On the twelfth day of Christmas, my true love gave to me: twelve drummers drumming, eleven pipers piping, ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree',
    );
  });
});
