const NEW_LINE = '\n';

export class ChristmasTree {
  private height: number = 0;

  constructor(height: number) {
    this.height = height;
  }

  draw() {
    let result = '';

    for (let i = 0; i < this.height; i++) {
      const spaces = ' '.repeat(this.height - i - 1);
      const evenStars = i * 2;
      const stars = 'X'.repeat(evenStars + 1);

      result += spaces + stars + NEW_LINE;
    }

    result += ' '.repeat(this.height - 1) + '|';

    return result;
  }
}
