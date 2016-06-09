'use strict';
function Board (){
	this.board = [];
}

Board.prototype.init = function(){
	let initLine = [];
	for (let i = 0; i <15; i++) {
		for (let j = 0; j < 15; j++) {
				initLine.push(0);
		}
		this.board.push(initLine);
		initLine = [];
	}
}

Board.prototype.placePiece = function(pieceCordianteX, pieceCordianteY, playerID){
	// var targetRow = this.board[pieceCordianteY];
	// var targetCol = targetRow[pieceCordianteX];
	if (this.ifCanPlacePiece(pieceCordianteX, pieceCordianteY)) {
		 this.board[pieceCordianteY][pieceCordianteX] = playerID;
	}
	else throw "it's not empaty";
}

Board.prototype.ifCanPlacePiece = function(pieceCordianteX,pieceCordianteY){
	return this.board[pieceCordianteY][pieceCordianteX] === 0;
}


// let _board = new Board();
// _board.init();
// _board.placePiece(0,2,1);
