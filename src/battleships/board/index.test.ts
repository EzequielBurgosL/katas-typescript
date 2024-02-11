import { Board, SHIP_CATEGORY } from './index';

describe('Board', () => {
  it('should create a board game with battle ships', () => {
    const board = new Board(2);

    expect(board.print()).toEqual([
      ['', ''],
      ['', ''],
    ]);
  });

  it('should add ship in specified coordinates', () => {
    const start = { x: 0, y: 1 };
    const end = { x: 1, y: 1 };
    const board = new Board(2).addShip({
      shipCategory: SHIP_CATEGORY.GUN,
      start,
      end,
    });

    expect(board.print()).toEqual([
      ['', ''],
      ['g', 'g'],
    ]);
  });

  it('should add multiple ships in specified coordinates', () => {
    const board = new Board(4)
      .addShip({
        shipCategory: SHIP_CATEGORY.CARRIER,
        start: { x: 0, y: 0 },
        end: { x: 3, y: 0 },
      })
      .addShip({
        shipCategory: SHIP_CATEGORY.DESTROYER,
        start: { x: 3, y: 1 },
        end: { x: 3, y: 3 },
      })
      .addShip({
        shipCategory: SHIP_CATEGORY.GUN,
        start: { x: 1, y: 2 },
        end: { x: 1, y: 2 },
      });

    expect(board.print()).toEqual([
      ['c', 'c', 'c', 'c'],
      ['', '', '', 'd'],
      ['', 'g', '', 'd'],
      ['', '', '', 'd'],
    ]);
  });
});
