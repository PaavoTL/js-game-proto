import Engine from './engine';
import GameObject from './gameobject';
import Renderable from './renderable';

import imgKnight from './images/knight.png'

let engine = new Engine();

let testObj1 = new GameObject(100,100);

testObj1.addChild(new Renderable(imgKnight, 0, 5, 5, 1, 5, 4));

engine.addObject(testObj1);


