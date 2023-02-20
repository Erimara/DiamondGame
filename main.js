
import {Position, Blue, Yellow, Red, Green, Lines} from "./component.js"
import { moveRed, moveBlue, moveYellow, moveGreen } from "./events.js";

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.height = innerHeight;
canvas.width = innerWidth;
class Game {
    constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.checkScore = 0;

    this.blue = new Blue(new Position(100,150),100,100, "blue")
    this.green = new Green(new Position(100,280),100,100, "green")
    this.red = new Red(new Position(100,420),100,100, "red")
    this.yellow = new Yellow(new Position(100,550),100,100, "yellow")

   
    // These rectangles are buggy with the color. Can't find the reason why. 
    //Ones color is connected to the other for some reason
    this.lines = [
      new Lines(new Position(665, 380), 100, 20, "green"),
      new Lines(new Position(665,420), 100, 20 ,"red"),
      new Lines(new Position(665,460), 100, 20, "yellow"),
      new Lines(new Position(665,500), 100, 20, "yellow"),
    ] 

    
    //Black Lines
    this.startLine = new Lines(new Position(100,100), 5, 1000, "black")
    this.endLine = new Lines(new Position(600,100), 5, 1000, "blue")   
 
    }

//Handle points
addPoints(){
  this.context.font = "20px serif"
  this.context.fillText(this.blue.score, 770, 397)
  this.context.fillText(this.green.score, 770, 439)
  this.context.fillText(this.red.score, 770, 478)
  this.context.fillText(this.yellow.score, 770, 516 )
 
}

//Handle other text than point-text
addText(){
  this.context.font = "50px serif"
  this.context.fillStyle = 'black';
  this.context.fillText("Start", 60,80)
  this.context.fillText("End", this.endLine.position.x - 40,80)
  this.context.fillText("Score board", this.endLine.position.x + 60,350)
  this.context.fillText("Diamond Race", this.endLine.position.x - 330,40)
  
  }

  stopMoving(){
    if(this.blue.position.x == this.endLine.position.x) { 
      this.context.fillText("Blue Wins!", this.endLine.position.x + 100,200)
      this.context.fillStyle = 'red';
      this.context.fillText(this.blue.score, 770, 397)

    } else if (this.green.position.x == this.endLine.position.x){    
      this.context.fillText("Green Wins!", this.endLine.position.x + 100,200)
      this.context.fillStyle = 'red';
      this.context.fillText(this.green.score, 770, 439)

    } else if(this.red.position.x == this.endLine.position.x) {
      this.context.fillText("Red Wins!", this.endLine.position.x + 100,200)
      this.context.fillStyle = 'red';
      this.context.fillText(this.red.score, 770, 478)
    
    } else if (this.yellow.position.x == this.endLine.position.x) {
      this.context.fillText("Yellow Wins!", this.endLine.position.x + 100,200)
      this.context.fillStyle = 'red';
      this.context.fillText(this.yellow.score, 770, 516 )
      
    } 
  }
  
}

//Exports main class to be able to use canvas/context
export let game = new Game(canvas,context)

//Movement functions for diamonds
    moveRed()
    moveBlue()
    moveYellow()
    moveGreen()
    
function main() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Start line and finish line
    game.startLine.drawLines(game)
    game.endLine.drawLines(game)

    //Color lines
    for (let i = 0; i<game.lines.length; i++) {
    let line = game.lines[i]
      line.drawLines(game)
    }
  

    //Diamond drawings
  game.blue.draw(game);
  game.green.draw(game);
  game.red.draw(game);
  game.yellow.draw(game);


   //Text functions
  game.addText()
  game.addPoints()

  //Stop clicking and set Winner
  game.stopMoving()
   
  if(game.green.score < 10
    && game.blue.score < 10 
    && game.red.score < 10
    && game.yellow.score < 10
    && game.yellow.position.x < 601) {
      requestAnimationFrame(main)
    }
 
}
main()
 
//Restart button
let restartButton = document.createElement("button");
restartButton.innerHTML = "Restart"
restartButton.style.position = "absolute";
restartButton.style.left = game.endLine.position.x + 100;
restartButton.style.top = game.endLine.position.y + 100;
restartButton.style.width = "120px"
restartButton.style.height = "40px"  
document.body.appendChild(restartButton)
restartButton.onclick = () =>{
  location.reload();
}


