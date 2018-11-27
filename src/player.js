import GameObject from "./gameobject";
import Renderable from './renderable';
import imgKnight from './images/knight.png'

export default class Player extends GameObject {
    constructor(x=0,y=0,z=0,flip=false){
        super(x,y,z);


        this.flip = flip
        
        this.sprites = [
            new Renderable (imgKnight, 0, 5, 5, 1, 5, 5, false) //idle
        ];

        console.log(this.zIndex)
    }


    draw(ctx){
        ctx.save();

        ctx.translate(this.position[0], this.position[1]);
        this.sprites[0].draw(ctx);
        this.sprites[0].flip = this.flip;

        ctx.restore();
    }
}