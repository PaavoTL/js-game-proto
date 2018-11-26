import Engine from './engine';
import GameObject from './gameobject';
import Renderable from './renderable';

let engine = new Engine();

let testObj1 = new GameObject(100,100);

testObj1.addChild(new Renderable());

engine.addObject(testObj1);


