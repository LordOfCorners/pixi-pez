/*
* Main JS file
*/

import config  from './config';
import Manager from './Manager';
import Dispenser from './Dispenser';
import { resizeHandler } from './utils';

import style from '../sass/main.scss';

// Create manager instance -> (renderer, ticker, root container)
let manager = new Manager();

// Add an all-encompassing container to the stage so the whole application can be scaled
let scene = new PIXI.Container();
manager.app.stage.addChild(scene);

// Call the resizeHandler function on load and when browser is resized
resizeHandler(manager.app);
window.addEventListener('resize',  function() {
    resizeHandler(manager.app);
});

// Add background image to scene
let background = PIXI.Sprite.fromImage('background.png');
scene.addChild(background);

// Create dispenser object, scale + position it, add to scene, make clickable
let dispenser = new Dispenser();
dispenser.scale.set(0.70);
dispenser.position.set(config.width * 0.75, config.width * 0.30);
scene.addChild(dispenser);
dispenser.interactive = true;
dispenser.buttonMode = true;
dispenser.on('pointerdown', dispenser.animate);

// Call update function every frame in children that have update functions
manager.app.ticker.add (function (delta) {
    for (let i = 0; i < scene.children.length; i++){
        if (scene.children[i].update){
            scene.children[i].update(delta);
            for (let j = 0; j < scene.children[i].children.length; j++){
                if (scene.children[i].children[j].update){
                    scene.children[i].children[j].update(delta);
                }
            }

        }
    }
});
