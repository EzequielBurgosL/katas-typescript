export class StringCalculator {
  add(stringOfNums: string, separator: string[] = [',']) {
    if (!stringOfNums.length) {
      return 0;
    }

    const separatorRegex = new RegExp(`[${separator.join('')}]`);
    const numbers = stringOfNums
      .split(separatorRegex)
      .map(str => parseInt(str, 10));

    this.checkNegativeNumbers(numbers);

    return numbers.reduce((curr, acc) => curr + acc, 0);
  }

  checkNegativeNumbers(numbers: number[]) {
    const negativeNumbers = numbers.filter(num => num < 0);

    if (negativeNumbers.length) {
      throw new Error(
        `error: negatives not allowed: ${negativeNumbers.join(' ')}`,
      );
    }
  }
}
