/*
*  Dispenser Class: Putting together the dispenser components and controlling animations
*/

import * as PIXI from 'pixi.js';
import config  from './config';
import Base from './Base';
import Insides from './Insides';
import Head from './Head';

export default class Dispenser extends PIXI.Container {
    constructor (){
        super(); // Call the PIXI.Container constructor

        // Variables needed for animations
        this.refillHeight = 190;
        this.animationType = 1;

        // Add the insides
        let insides = new Insides();
        insides.position.set(50, 80);
        insides.initPos = insides.position.y;
        insides.endPos = insides.position.y - this.refillHeight;
        this.addChild(insides);

        // Add the base
        let base = new Base();
        base.position.set(0, 140);
        this.addChild(base);

        // Add the head
        let head = new Head();
        head.position.set(150, 155);
        head.initPos = head.position.y;
        head.endPos = head.position.y - this.refillHeight;
        this.addChild(head);
    }

    update (delta){
        // Refilling animation: Raise and then lower head/insides
        for (let i = 0; i < this.children.length; i++){
            if (this.children[i].hasOwnProperty('refilling')) {
                let item = this.children[i];
                if (item.refilling) {
                    item.position.y -= item.refillSpeed * delta;
                    if( item.position.y <= item.endPos) {
                        item.refillSpeed *=-1;
                    }
                    else if (item.position.y >= item.initPos) {
                        item.refillSpeed *=-1;
                        item.position.y = item.initPos;
                        item.refilling = false;
                    }
                }
            }
        }
    }

    animate () {
        // Alternate mouth opening or refilling animation
        if (this.animationType == 1){
            for (let i = 0; i < this.children.length; i++){
                if (this.children[i].hasOwnProperty('opening')) {
                    this.children[i].opening = true;
                }
            }
            this.animationType = 2;
        } else if (this.animationType == 2) {
            for (let i = 0; i < this.children.length; i++){
                if (this.children[i].hasOwnProperty('refilling')) {
                    this.children[i].refilling = true;
                }
            }
            this.animationType = 1;
        }

    }
}
