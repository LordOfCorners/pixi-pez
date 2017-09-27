/*
* Helper functions go here
*/

import config  from './config';

// Resize stage when necessary
function resizeHandler (app) {
    
    // Calculate amount to scale stage by
    const scaleFactor = Math.min(
        window.innerWidth / config.width,
        window.innerHeight / config.height
    );

    // Calculate new size based on scale
    const newWidth = Math.ceil( config.width * scaleFactor);
    const newHeight = Math.ceil( config.height * scaleFactor);

    // Change the size of the canvas and tell Pixi
    app.view.style.width = `${newWidth}px`;
    app.view.style.height = `${newHeight}px`;
    app.renderer.resize(newWidth, newHeight);

    // Perform the scale
    app.stage.children[0].scale.set(scaleFactor);
}

export { resizeHandler }
