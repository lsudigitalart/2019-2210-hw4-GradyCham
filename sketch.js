//PLAYER 1: USE WASD KEYS TO MOVE AROUND
//PLAYER 2: USE ARROW KEYS
//IF YOU HIT IT WHILE YOU'VE MOVED BACK YOU CAN MAKE THE BALL MOVE FASTER
//IF YOU HIT IT WHILE YOU'VE MOVED CLOSER YOU CAN SLOW THE BALL DOWN
//FIRST TO 7 WINS


function setup(){
	createCanvas (1000, 1000);
	background (0);
}

var player1Score = 0;
var player2Score = 0;
var player1X = 50;
var player1Y = 600;
var player2X = 900;
var player2Y = 600;
var ballX = 500;
var ballY = 500;
var directionX = 0;
var directionY = 0;
var oneTime = 0;
var ballMovement = 10;
var frameRate = 2;
var speed = 5;

function draw(){

	background (0);
	fill(255);
	textSize(100);
	text(player1Score, 100, 100);
	
	textSize(100);
	text(player2Score, 800, 100);
	
	text ("Super Pong", 220, 100)
	
	noStroke();
	ellipse (ballX, ballY, 100, 100);
	rect (player1X, player1Y, 50, 200);
	rect (player2X, player2Y, 50, 200);

	print (directionX, speed);
	if (oneTime !== 0){
		ballX += (abs(speed)* directionX);
		ballY += (abs(speed) * directionY);
	}
	
	if (ballX < player1X || ballX> player2X){
		if (ballX < 0){
		    player2Score++;
	    }
	    if (ballX > 1000){
	    	player1Score++;
	    }
		ballX = 500;
		ballY = 500;
		oneTime = 0;
		directionX = 0;
		directionY = 0;
		speed = 5;

	}
	if (ballY < 150 || ballY > 950){
		directionY *= -1;
	}
	
	if (ballX - 48 < player1X + 50){
		if (ballY + 50 > player1Y && ballY-50 < player1Y+ 200){
		    

			//if (ballY + 50 > player1Y + 100){
			//    directionY *= -1;
			//}
			if (player1X < 50){
				speed = abs(speed) + 2;
			}
			else if (player1X > 50 && speed > 5){
				speed = abs(speed) - 2;
			}
			directionX *= -1;
	    }
	}

	if (ballX +48 > player2X){
		if (ballY + 50 > player2Y && ballY-50 < player2Y+ 200){
		    
			
			//if (ballY + 50 > player2Y + 100){
			//    directionY *= -1;
			//}
			
			if (player2X < 900 && abs(speed) > 5){
				speed = abs(speed) - 2;
			}
			else if (player2X > 900) {
				speed = abs(speed)+ 2;
			}
			directionX *= -1;
	    }
	}
	
	if (player1Score > 6){
		background (255, 0, 0);
		text ("Player 1 Wins", 200, 100);
	}
	if (player2Score > 6){
		background (0, 0, 255);
		text ("Player 2 Wins", 200, 100);
	}

	

}

function mousePressed(){
	if (oneTime === 0){
		directionX = random([-1, +1]);
	    directionY = random([-1, +1]);
		oneTime++;
	}
}
function keyPressed() {
	if (player1Y > 110){
        if (key === "w") {
          player1Y -=50;
        }
	}
	if (player1Y < (height - 200)){
		if (key === "s") {
         player1Y += 50;
        }
    }
	if (player2Y > 110 ){
		if (keyCode === UP_ARROW){
		    player2Y -= 50;
	    }
	}
	if (player2Y < (height - 200)){
		if (keyCode === DOWN_ARROW){
		    player2Y += 50;
	    }
	}
	if (player1X > 0 ){
		if (key === "a"){
		player1X -= 20;
	    }
	}
	if (player1X < 100){
		if (key === "d"){
		player1X += 20;
	    }
	}

	if (player2X >850 ){
		if (keyCode === LEFT_ARROW){
		player2X -= 20;
	    }
	}
	if (player2X < 950){
		if (keyCode === RIGHT_ARROW){
		player2X += 20;
	   }
	}
	
}