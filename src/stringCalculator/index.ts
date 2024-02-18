export class StringCalculator {
  add(stringOfNums: string) {
    if (!stringOfNums.length) {
      return 0;
    }

    return stringOfNums
      .split(',')
      .map(stringNum => parseInt(stringNum, 10))
      .reduce((curr, acc) => curr + acc, 0);
  }
}
