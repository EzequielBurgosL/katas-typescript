const days = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];

const gifts = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight maids a-milking',
  'nine ladies dancing',
  'ten lords a-leaping',
  'eleven pipers piping',
  'twelve drummers drumming',
];

export function getLyrics(day: number) {
  const giftsForDay = gifts.slice(0, day).reverse();

  const giftsString = giftsForDay.map((gift, index) => {
    if (giftsForDay.length === 1) {
      return gift;
    }

    if (index >= giftsForDay.length - 1) {
      return `and ${gift}`;
    }

    return `${gift},`;
  });

  return `On the ${
    days[day - 1]
  } day of Christmas, my true love gave to me: ${giftsString.join(' ')}`;
}
