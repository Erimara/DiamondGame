





export class Position {
    constructor(x,y){
    this.x = x;
    this.y = y;
    }
}

export class Lines {
    constructor(position, width, height, color){  
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;

    }
drawLines(game){
    game.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    game.context.fillStyle = this.color;
}



}

export class Diamonds{
    constructor(position, width, height, color){
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.score = 0;
    }

    
    draw(game){        
        game.context.save();
        game.context.beginPath();
        game.context.moveTo(this.position.x, this.position.y);
                
        game.context.lineTo(this.position.x - this.width / 2, this.position.y + this.height / 2);
        game.context.lineTo(this.position.x, this.position.y + this.height);
        game.context.lineTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
                          
        game.context.closePath();
        game.context.fillStyle = this.color
        game.context.fill();
        game.context.restore();
    }

    
}

export class Red extends Diamonds {
    super(color){
        this.color = color
    }    
}
export class Blue extends Diamonds {
    super(color){
        this.color = color;
    }
}
export class Yellow extends Diamonds {
    super(color){
        this.color = color;
    }
}
export class Green extends Diamonds {
    super(color){
        this.color = color;
    }
}