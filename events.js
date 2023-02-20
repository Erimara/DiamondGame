import {game} from "./main.js"


export function moveRed(){
    let redDiamond = game.red;
    //Set image to canvas diamond
    redDiamond = document.createElement("img");
    redDiamond.src = "Pictures/red.png";
    redDiamond.style.height = "200px";
    redDiamond.style.width = "300px";
    redDiamond.style.position = "absolute";
    redDiamond.style.left = game.red.position.x - 150;
    redDiamond.style.top = game.red.position.y - 10;
    document.body.appendChild(redDiamond);
    redDiamond.onclick = function () {
        game.red.position.x += 50;
        game.red.score++;   
        game.checkScore++;
  //Condition movement
    if(game.green.score < 10
        && game.blue.score < 10 
        && game.red.score < 10
        && game.yellow.score < 10
        && game.red.position.x < 600) {
        redDiamond.style.left = game.red.position.x - 130;
        }
    }
}


export function moveBlue(){
    let blueDiamond = game.blue;
    blueDiamond = document.createElement("img");
    blueDiamond.src = "Pictures/blue.png";
    blueDiamond.style.height = "200px";
    blueDiamond.style.width = "300px";
    blueDiamond.style.position = "absolute";
    blueDiamond.style.left = game.blue.position.x - 100;
    blueDiamond.style.top = game.blue.position.y + 15;
    document.body.appendChild(blueDiamond);
    blueDiamond.onclick = function () {
        game.blue.position.x += 50;
        game.blue.score++;
      
        if(game.green.score < 10
        && game.blue.score < 10 
        && game.red.score < 10
        && game.yellow.score < 10
        && game.blue.position.x < 600) {
        blueDiamond.style.left = game.blue.position.x - 100;
        }
    }
}

export function moveYellow(){
    let yellowDiamond = game.yellow;

yellowDiamond = document.createElement("img");
yellowDiamond.src = "Pictures/yellow.png";
yellowDiamond.style.height = "200px";
yellowDiamond.style.width = "300px";
yellowDiamond.style.position = "absolute";
yellowDiamond.style.left = game.yellow.position.x - 130;
yellowDiamond.style.top = game.yellow.position.y + 20;
document.body.appendChild(yellowDiamond);
yellowDiamond.onclick = function () {
    game.yellow.position.x += 50;
    game.yellow.score++
  
    if(game.green.score < 10
    && game.blue.score < 10 
    && game.red.score < 10
    && game.yellow.score < 10
    && game.yellow.position.x < 601) {
  yellowDiamond.style.left = game.yellow.position.x - 90;
        }    
    }
}
export function moveGreen(){
let greenDiamond = game.green;

greenDiamond = document.createElement("img")
greenDiamond.src = "Pictures/green.png";
greenDiamond.style.height = "200px";
greenDiamond.style.width = "300px";
greenDiamond.style.position = "absolute";
greenDiamond.style.left = game.green.position.x - 150;
greenDiamond.style.top = game.green.position.y + 30;
document.body.appendChild(greenDiamond);
greenDiamond.onclick = function () {
    game.green.position.x += 50;
    game.green.score++;
  
    if(game.green.score < 10
         && game.blue.score < 10 
        && game.red.score < 10
        && game.yellow.score < 10
         && game.green.position.x < 600) { 
        greenDiamond.style.left = game.green.position.x - 120;   
    
        }
    }
}
