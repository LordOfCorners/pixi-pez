import * as PIXI from 'pixi.js';

export default class Manager {
  constructor(config){
    this.app = new PIXI.Application(config.width, config.height, config.rendererOptions);
    this.app.view.id = 'pixi';
    document.body.appendChild(this.app.view);
  }
}
