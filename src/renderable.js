import noIMG from './images/noimg.png'

export default class Renderable{
    constructor(image = noIMG, startFrame = 0, frameCount = 0, framesX = 1, framesY = 1, animSpeed = 0 ,size = 1){
        this.img = new Image();
        this.img.src = image;
        
        this.frame = startFrame;
        this.startFrame = startFrame;
        this.frameCount = frameCount;
        this.framesX = framesX;
        this.framesY = framesY;
        this.subWidth = this.img.width / framesX;
        this.subHeight = this.img.height / framesY;
        this.animSpeed = animSpeed;
        this.size = size;

        this.animTime = new Date().getTime();
    }

    draw(ctx){
        console.log(this.frame)

        let t = new Date().getTime();
        if (t > this.animTime){
            this.frame ++;
            this.animTime = t + 1000 / this.animSpeed;
        }

        if (this.frame > this.startFrame + this.frameCount -1){
            this.frame = this.startFrame;
        }

        let posX = (this.frame % this.framesX) * this.subWidth;
        let posY = Math.floor(this.frame / this.framesX) * this.subHeight;

        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.img, posX, posY, this.subWidth, this.subHeight, 0, 0, this.subWidth * this.size, this.subHeight * this.size);
    }
}