import Engine from './engine';
import GameObject from './gameobject';
import Renderable from './renderable';

import imgKnight from './images/knight.png'

let engine = new Engine();

let testObj1 = new GameObject(100,100);
let testrend1 = new Renderable(imgKnight, 0, 5, 5, 1, 5, 5, false);

testObj1.addChild(testrend1);

engine.addObject(testObj1);

engine.update = (dt) => {
    
    if(engine.input.isKeyDown("KeyW")){
        testObj1.translate(0*dt, -50*dt)
    }
    if(engine.input.isKeyDown("KeyS")){
        testObj1.translate(0*dt, 50*dt)
    }
    if(engine.input.isKeyDown("KeyA")){
        testObj1.translate(-50*dt, 0*dt)
    }
    if(engine.input.isKeyDown("KeyD")){
        testObj1.translate(50*dt, 0*dt)
    }

};


