import { Game } from '.';
import { SHIP_CATEGORY, Ship } from './board';

describe('BattleShips', () => {
  describe('start', () => {
    it('should create a board with a fleet', () => {
      const fleet: Ship[] = [
        {
          shipCategory: SHIP_CATEGORY.CARRIER,
          start: { x: 0, y: 0 },
          end: { x: 3, y: 0 },
        },
        {
          shipCategory: SHIP_CATEGORY.DESTROYER,
          start: { x: 3, y: 1 },
          end: { x: 3, y: 3 },
        },
        {
          shipCategory: SHIP_CATEGORY.GUN,
          start: { x: 1, y: 2 },
          end: { x: 1, y: 2 },
        },
      ];
      const game = new Game().start(fleet);

      expect(game.print()).toEqual([
        ['c', 'c', 'c', 'c', '', '', '', '', '', ''],
        ['', '', '', 'd', '', '', '', '', '', ''],
        ['', 'g', '', 'd', '', '', '', '', '', ''],
        ['', '', '', 'd', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
      ]);
    });
  });
});
