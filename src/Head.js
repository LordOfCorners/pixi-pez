/*
* Head Class: Create object for pez head that extends the sprite class
*/

import config  from './config';
import * as PIXI from 'pixi.js';

export default class Head extends PIXI.Sprite {
    constructor (){
        super(PIXI.Texture.fromImage('head.png')); // Call the PIXI.Sprite constructor
        this.scale.set(0.65);
        this.anchor.set(1,1);

        // Variables needed for opening mouth animation
        this.opening = false;
        this.openedVal = 0.4;
        this.closedVal = 0;
        this.rotSpeed = config.mouthRotationSpeed;

        // Variables needed for refilling animation
        this.refilling = false;
        this.refillSpeed = 5;
    }

    update (delta){
        // Rotate mouth until point, then return to original rotation
        if (this.opening) {
            this.rotation += this.rotSpeed * delta;
            if (this.rotation >= this.openedVal) {
                this.rotSpeed *=-1;
            } else if (this.rotation <= this.closedVal) {
                this.opening = false;
                this.rotation= this.closedVal;
                this.rotSpeed *=-1;
            }
        }
    }
}
