/*
* Game Manager Class: Great a pixi application upon construction (renderer, ticker, root container)
*/

import * as PIXI from 'pixi.js';
import config  from './config';

export default class Manager {

    constructor (){
        this.app = new PIXI.Application(config.width, config.height, config.rendererOptions);
        this.app.view.id = 'pixi';
        document.body.appendChild(this.app.view);
    }

    // Some scene management functions might go here if there were more than one scene...

}
