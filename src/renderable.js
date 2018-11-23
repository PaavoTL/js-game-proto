import noIMG from './images/noimg.png'

export default class Renderable{
    constructor(image = noIMG){
        this.img = new Image();
        this.img.scr = image;
        this.draw = this.draw.bind(this);
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,2,2);
        ctx.drawImage(this.img, 0,0,64,64);
    }
}