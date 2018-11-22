import GameObject from "./gameobject";

export default class Engine {
    
    constructor(){
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";

        this.canvas = document.createElement("canvas");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.time = new Date().getTime();
        this.dt = 0;

        this.objs = [];
        
        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj){
        if (obj instanceof GameObject){
            this.objs.push(obj);
        } else {
            console.error("Invalid Object. Not GameObject");
        }
    }

    loop(){
        // päivitykset tämän alle
        
        // Delta ajan lasku
        this.time = new Date().getTime();
        this.dt = (this.time - this.lastTime) / 1000;
        this.lastTime = this.time;

        // järsestä objectit piirto järjestykseen
        this.objs.sort(function(a,b) {
            return a.zIndex - b.zIndex
        });

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // piirto tämän alle
        this.objs.forEach (obj =>{
            obj.draw(this.ctx);
        })
        
        
        window.requestAnimationFrame(this.loop.bind(this));
     }
}