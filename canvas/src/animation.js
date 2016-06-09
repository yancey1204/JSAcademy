'use strict';

var canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let x = 10;
let y = 20;

canvas.width = "600";
canvas.height = "600";

let img = new Image();
img.src = "res/flight.png";

let imgLaser = new Image();
imgLaser.src = "res/laser.png";

let imgEnemy = new Image();
imgEnemy.src = "res/enemy.png";

let playerShip_damage1 = new Image();
playerShip_damage1.src = "res/playerShip1_damage1.png";

let playerShip_damage2 = new Image();
playerShip_damage2.src = "res/playerShip1_damage2.png";

let playerShip_damage3 = new Image();
playerShip_damage3.src = "res/playerShip1_damage3.png";

img.onload = function(){
	onFrame();
}


let enemySpeed = 1;
let speed = 10;
let time = 0;

function onFrame (){
	ctx.fillStyle = "#32465a";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.drawImage(img,x,y);

	
	time ++;
	if (time === 200) {
		generateEnemy();
		time = 0;
	}

	filterArray();
	
	drawLaser();
	drawEnemy();

	moving(laserArray);
	moving(enemyArray);
	requestAnimationFrame(onFrame);
}

canvas.addEventListener("mousemove",(e)=>{
	x = e.layerX - img.width/2;
	y = e.layerY - img.height/2;
	// bump !
	for (let i = 0; i < enemyArray.length; i++) {
		if (	e.layerX > enemyArray[i].x 
			&&	e.layerX < (enemyArray[i].x + imgEnemy.width)
			&&	e.layerY > enemyArray[i].y
			&& 	e.layerY < (enemyArray[i].y + imgEnemy.height)
			) {
				ctx.drawImage(playerShip_damage1,x,y);
			    setTimeout(	ctx.drawImage(playerShip_damage2,x,y), 1000);
				setTimeout( ctx.drawImage(playerShip_damage3,x,y), 2000);
				cancelAnimationFrame(onFrame);			
		}
	}

});

let laserArray = [];

function drawLaser (){
	for (let i = 0; i < laserArray.length; i++) {
		ctx.drawImage(imgLaser, laserArray[i].x, laserArray[i].y);
	}
}

let id = 0;
canvas.addEventListener("click", (e) => {
	let	lx = e.layerX;
	let	ly = e.layerY - img.height/2;
	createLaser(lx,ly,id);
	id ++;
});

function createLaser(lx, ly, id){
	let laserObj = {};
	laserObj.id = id;
	laserObj.x = lx;
	laserObj.y = ly ;
	laserArray.push(laserObj);
	console.log(laserArray);
}

function filterArray(){
	for (let i = 0; i < laserArray.length; i++) {
		if (laserArray[i].y <= 0) {
			laserArray.splice(i,1);
		}
	}	
	for (let i = 0; i < enemyArray.length; i++) {
		if (enemyArray[i].y >= canvas.height) {
			enemyArray.splice(i,1);
		}
	}
}

function moving(obj){
	for (let i = 0; i < obj.length; i++) { 
		if (obj === laserArray) {
			obj[i].y -= speed;
		}
		else obj[i].y += enemySpeed;
	}	
}

let enemyArray = [];
function createEnemy (id){
	let enemy = {};
	enemy.id = id;
	enemy.x = Math.floor(Math.random() * (canvas.width - imgEnemy.width + 1));
	enemy.y = 0;
	enemyArray.push(enemy);
}

let enemyId = 0;
function generateEnemy(){
	createEnemy(enemyId);
	enemyId++;
	console.dir(enemyArray);
}

function drawEnemy (){
	for (let i = 0; i < enemyArray.length; i++) {
		ctx.drawImage(imgEnemy, enemyArray[i].x, enemyArray[i].y);
	}
}