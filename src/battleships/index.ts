import { Board, Ship } from './board';

interface Stats {
  totalShots: number;
  misses: number;
  hits: number;
}

export class Game {
  private board: Board;
  private stats: Stats;

  constructor() {
    this.board = new Board(10);
  }

  addPlayer() {}

  start(fleet: Ship[]) {
    fleet.forEach(ship => this.board.addShip(ship));
    return this;
  }

  endTurn() {}

  print(): string[][] {
    return this.board.print();
  }

  fire() {}
}
