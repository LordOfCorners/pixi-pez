import config  from './config';
import Manager from './Manager';
import { resizeHandler } from './utils';

import style from '../sass/main.scss';

let manager = new Manager(config);
let scene = new PIXI.Container();

manager.app.stage.addChild(scene);

resizeHandler(manager.app);
window.addEventListener('resize',  function(e) {
    resizeHandler(manager.app);
});
