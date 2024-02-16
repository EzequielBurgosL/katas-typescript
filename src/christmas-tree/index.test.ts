import { ChristmasTree } from '.';

describe('Christmas tree', () => {
  it('should be build a tree of height 2', () => {
    const tree = new ChristmasTree(2);

    expect(tree.draw()).toBe(' X\nXXX\n |');
  });

  it('should build a tree of height 3', () => {
    const tree = new ChristmasTree(3);

    expect(tree.draw()).toBe('  X\n XXX\nXXXXX\n  |');
  });

  it('should build a tree of height 10', () => {
    const tree = new ChristmasTree(10);

    expect(tree.draw()).toBe(
      '         X\n        XXX\n       XXXXX\n      XXXXXXX\n     XXXXXXXXX\n    XXXXXXXXXXX\n   XXXXXXXXXXXXX\n  XXXXXXXXXXXXXXX\n XXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXXXX\n         |',
    );
  });
});
