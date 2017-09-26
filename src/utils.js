import config  from './config';

function resizeHandler(app) {
    const scaleFactor = Math.min(
      window.innerWidth / config.width,
      window.innerHeight / config.height
    );
    const newWidth = Math.ceil( config.width * scaleFactor);
    const newHeight = Math.ceil( config.height * scaleFactor);


    app.view.style.width = `${newWidth}px`;
    app.view.style.height = `${newHeight}px`;

    app.renderer.resize(newWidth, newHeight);
    app.stage.children[0].scale.set(scaleFactor);
}

export { resizeHandler }
