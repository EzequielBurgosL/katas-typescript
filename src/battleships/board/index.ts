export enum SHIP_CATEGORY {
  CARRIER = 'c',
  DESTROYER = 'd',
  GUN = 'g',
}

type Coordinates = {
  x: number;
  y: number;
};

export type Ship = {
  shipCategory: SHIP_CATEGORY;
  start: Coordinates;
  end: Coordinates;
};

export class Board {
  private readonly dimension: number;
  private board: string[][];

  constructor(dimension: number) {
    this.dimension = dimension;
    this.create();
  }

  create(): Board {
    const emptyBoard: string[][] = [];

    for (let i = 0; i < this.dimension; i++) {
      emptyBoard.push([]);

      for (let j = 0; j < this.dimension; j++) {
        emptyBoard[i][j] = '';
      }
    }

    this.board = emptyBoard;
    return this;
  }

  addShip({ shipCategory, start, end }: Ship): Board {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (start.y <= i && start.x <= j && end.y >= i && end.x >= j) {
          this.board[i][j] = shipCategory;
        }
      }
    }

    return this;
  }

  print() {
    return this.board;
  }
}
