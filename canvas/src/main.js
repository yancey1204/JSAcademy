'use strict';

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = "600";
canvas.height = "600";

let x = 0;
let y = 0;
let cellWidth = 40;
let boardWidth = 600;
let boardSize = 15;

let _board = new Board();
_board.init();

ctx.beginPath();

for(let i =0; i <= boardSize; i ++){
	ctx.moveTo(x,0);
	ctx.lineTo(x, boardWidth);
	x += cellWidth;

	ctx.moveTo(0,y);
	ctx.lineTo(boardWidth, y);
	y += cellWidth;
	ctx.stroke();
}



let pieceCordinateX = 0;
let pieceCordinateY = 0;
// let pieceTo = pieceOrigin + cellWidth;
// drawPieceX(pieceCordinateX, pieceCordinateY);


function  drawPieceX (pieceCordinateX, pieceCordinateY){
	ctx.beginPath();
	ctx.strokeStyle= "#3498db";
	ctx.moveTo(pieceCordinateX*cellWidth,pieceCordinateY*40);
	ctx.lineTo((pieceCordinateX+1)*cellWidth, (pieceCordinateY+ 1)*cellWidth);
	ctx.moveTo((pieceCordinateX+1)*cellWidth,pieceCordinateY*cellWidth);
	ctx.lineTo(pieceCordinateX*cellWidth,(pieceCordinateY+1)*cellWidth);
	ctx.stroke();
}

pieceCordinateX = 2;
pieceCordinateY = 3;
// drawPieceO(pieceCordinateX,pieceCordinateY);

function drawPieceO (pieceCordinateX, pieceCordinateY){
	ctx.beginPath();
	ctx.fillStyle = "#2ecc71";
	var centerX = (pieceCordinateX+1)*cellWidth - cellWidth/2;
	var centerY = (pieceCordinateY+1)*cellWidth - cellWidth/2;
	ctx.arc(centerX, centerY, cellWidth/3, 0, 2 * Math.PI);
	ctx.fill();
}


let player = 1;
canvas.addEventListener("click",(e)=>{
	let x = e.layerX;
	let y = e.layerY;
	let _pieceCordinateX = Math.floor(x/cellWidth);
	let _pieceCordinateY = Math.floor(y/cellWidth);

	if(_board.ifCanPlacePiece(_pieceCordinateX,_pieceCordinateY)){
		_board.placePiece(_pieceCordinateX,_pieceCordinateY,player);
	// player 1 => X ; 2 => o
		if (player === 1) {
			drawPieceX(_pieceCordinateX,_pieceCordinateY);
			player = 2;
		}
		else{
			drawPieceO(_pieceCordinateX,_pieceCordinateY);
			player = 1;
		}
		
	}
})

function getPieceCordinate(x,y){

}
