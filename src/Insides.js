/*
* Insides Class: Create object for pez indsides that extends the sprite class
*/

import config  from './config';
import * as PIXI from 'pixi.js';

export default class Insides extends PIXI.Sprite {
    constructor (){
        super(PIXI.Texture.fromImage('insides.png')); // Call the PIXI.Sprite constructor
        this.scale.set(0.7);

        // Variables for refill animation
        this.refilling = false;
        this.refillSpeed = config.refillSpeed;
    }
}
