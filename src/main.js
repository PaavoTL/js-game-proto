import Engine from './engine';
import GameObject from './gameobject';

let engine = new Engine();

let testObj1 = new GameObject;
let testObj2 = new GameObject(5,5,0,"green");
engine.addObject(testObj1);
engine.addObject(testObj2);
