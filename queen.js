// It doesn't work yet
class Queen {
  constructor(row, col){
    this.row = row;
    this.col = col;
  };

  isValidQueen(game) {
    let { n, numberOfValidQueens, board } = game;
    console.log('queens', numberOfValidQueens);
    console.log('the new queens, x:', this.row, " ,y: ", this.col);
    console.table(board);
    
    if(this.checkingRows(board))
      if(this.checkingCols(board))
        if(this.checkingDiags(n, board))
          return true

    return false
  }

  checkingDiags = (n, board) => {
    let count = 0;
    for(let y = 0; y < n; y++) {
      for(let x = 0; x < n; x++) {
        if (board[y][x] === 1 ) {
          console.log('diago check', count);
          count++
          if (Math.abs(this.row - y) === Math.abs(this.col - x)) {
            return false;
          }
        }
      }    
    }
    return true
  }

  checkingRows = (board) => {
    let countOccurenceInRow = {};
    board[this.row].forEach((value) => {
      if(value in countOccurenceInRow) 
        countOccurenceInRow[value] += 1;
      else
        countOccurenceInRow[value] = 1;
    })

    return countOccurenceInRow[1] >= 1? false : true;
  }

  checkingCols = (board) => {
    let countOccurenceInCol = {};

    board.forEach((row) => {
      if (row[this.col] in countOccurenceInCol) 
        countOccurenceInCol[row[this.col]] += 1;
      else
        countOccurenceInCol[row[this.col]] = 1;
    })
     
    return countOccurenceInCol[1] >= 1 ? false : true
  }
}

class QueenGame {
  constructor(n) {
    this.n = n;
    this.queensPositions = [];
    this.numberOfValidQueens = 0;
    this.lastValidQueen = Queen;
    this.board = this.buildBoard(this.n);
  }

  findOneSolution = () => {      
    let row = 0;
    while(this.numberOfValidQueens !== this.n) {
      let col = 0;
      while(row < this.n) {
        while(col <= this.n) {
          console.log('rows', row)
          console.log('cols', col);
          let queen = new Queen(row, col)
          if(this.addQueen(queen)) {
            this.lastValidQueen = queen;
            col++;
            row=0;
            console.log('test');
          }
          else {
            if(row == this.n - 1) {
              this.board[this.lastValidQueen.row][this.lastValidQueen.col] = 0;
              row = this.lastValidQueen.row + 1;
              col = 0;
            } else
              row++;
            break;
          }
        }
      }
      row++;
    }
    return true;
  }

  addQueen = (queen) => {
    if(queen.isValidQueen(this)) {
      this.board[queen.row][queen.col] = 1;
      this.numberOfValidQueens++;
      return true;
    } else {
      this.board[queen.row][queen.col] = 0;
      return false
    }
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

  if(game.findOneSolution(0)) {
    game.printBoard();
  }
  else 
    console.log(`No result find for ${numberOfQueens} queens game :\(`);
}

run(4);

