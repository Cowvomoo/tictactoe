//promise function named checkSquare to check if square is empty, taken by opp, or taken by friendly
// this is so it can know where to move

//need an sql table of chess grid with each objects id on its piece
//need an sql table with x, y, id and color of each


class Piece {
  constructor(xCoord, yCoord, color, number){
    this.x = xCoord;
    this.y = yCoord;
    this.color = color;
    this.number = nummber;
  }

  take() {
    //get id of piece with sql value of current position (should be lobbyid + pieceName(blackpawn1 etc))
    
  }
}

class Pawn extends Piece {
  move() {
    if (this.color === 'white') {let c = 1} else {let c = -1}
    let updatedY = this.y + c;
    //checkSquare.then(if taken === null) {this.y = updatedY} else 
  }
  moveTake() {
    //only for pawn; if sql of move diagonal is !null and opposite color
  }
}

class Bishop extends Piece {
  
}

class Rook extends Piece {
  
}

class Knight extends Piece {
  
}

class Queen extends Piece {
  
}