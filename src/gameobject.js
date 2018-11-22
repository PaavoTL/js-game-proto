export default class GameObject {
    constructor(x=0,y=0,zIndex=0,color = "red"){
        this.position = [x,y];
        this.zIndex = zIndex;
        this.color = color;
        this.children = [];
    }

    addChild(child){
        this.children.push(child);
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);
        
        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,50,50);

        this.children.forEach(child => {
            if(child instanceof GameObject){
                child.draw(ctx);
            }
        })

        ctx.restore();
    }
}