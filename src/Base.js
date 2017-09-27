/*
* Base Class: Create object for pez base that extends the sprite class
*/

import * as PIXI from 'pixi.js';

export default class Base extends PIXI.Sprite {
    constructor (){
        super(PIXI.Texture.fromImage('base.png')); // Call the PIXI.Sprite constructor
    }

    // Functions specific to this sprite could go here
}
