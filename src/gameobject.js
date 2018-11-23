import Renderable from "./renderable";

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

        this.children.forEach(child => {
            if(child instanceof GameObject){
                child.draw(ctx);
            }
            if(child instanceof Renderable){
                child.draw(ctx)
            }
        })

        ctx.restore();
    }
}