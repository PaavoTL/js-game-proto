import Engine from './engine';
import GameObject from './gameobject';
import Renderable from './renderable';

import imgKnight from './images/knight.png'
import Player from './player';

let engine = new Engine();

let player = new Player(400,100,100,false);



engine.addObject(player);

engine.update = (dt) => {
    
    if(engine.input.isKeyDown("KeyW")){
        player.translate(0*dt, -100*dt)
    }
    if(engine.input.isKeyDown("KeyS")){
        player.translate(0*dt, 100*dt)
    }
    if(engine.input.isKeyDown("KeyA")){
        player.translate(-100*dt, 0*dt);
        player.flip = true;
    }
    if(engine.input.isKeyDown("KeyD")){
        player.translate(100*dt, 0*dt);
        player.flip = false;
    }

};


