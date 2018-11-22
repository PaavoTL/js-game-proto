export default class GameObject {
    constructor(){
        this.position = [0,0];
        this.children = [];
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);
        
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,50,50);

        ctx.restore();
    }
}