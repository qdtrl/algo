class Queen {
  constructor(row, col){
    this.row = row;
    this.col = col;
  };
}

class QueenGame {
  constructor(n) {
    this.n = n;
    this.queensPositions = [];
    this.board = this.buildBoard(this.n);
  }

  getOneSolution = (row) => {
    if (this.n === 2 || this.n === 3){
      return false;
    }  
    if (this.n === row) {
      return true;
    }
  
    for(let col = 0; col < this.n; col++){
      let isSafe = true;
      this.queensPositions[row] = new Queen(row, col);
      for(let placedQueen = 0; placedQueen < row; placedQueen++) {
        if (this.queensPositions[placedQueen].col === col ||
            this.queensPositions[placedQueen].row - this.queensPositions[placedQueen].col === row - col || 
            this.queensPositions[placedQueen].row + this.queensPositions[placedQueen].col === row + col)
          isSafe = false;
      }
  
      if (isSafe)
        if(this.getOneSolution(row+1))
          return true;
    }
    return false;
  }

  fillBoardWithQueens = () => {
    if(this.queensPositions.length === this.n)
      this.queensPositions.forEach((queen) => {
        this.board[queen.row][queen.col] = 'Q';
      })
  }

  buildBoard = (n) => {
    let cols = [];
    for (let row = 0; row < n; row++) {
      let rows = [];
        for (let col = 0; col < n; col++) {
            rows.push(0);
        }
        cols.push(rows)
    }
    return cols;
  }

  printBoard() {
    console.table(this.board);
  }
}

const run = (numberOfQueens) => {
  const game = new QueenGame(numberOfQueens);

  if(game.getOneSolution(0)) {
    game.fillBoardWithQueens();
    game.printBoard();
  }
  else 
    console.log(`No result find for ${numberOfQueens} queens game :\(`);
}

run(5);
