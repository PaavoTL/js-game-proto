import noIMG from './images/noimg.png'

export default class Renderable{
    constructor(image = noIMG, startFrame = 0, frameCount = 0, framesX = 1, framesY = 1, frameSpeed = 0){
        this.img = new Image();
        this.img.src = image;

        this.startFrame = startFrame;
        this.frameCount = frameCount;
        this.framesX = framesX;
        this.framesY = framesY;
        this.frameSpeed = frameSpeed;
    }

    draw(ctx){
        ctx.drawImage(this.img, 0, 0);
    }
}