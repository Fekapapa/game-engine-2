'use strict'

const ImagePreload = (rawImages) => {
  const preloadedImages = {};
  const images = {};

  for (let unit in rawImages) {
    preloadedImages[unit] = {};

    for (let frame in rawImages[unit]) {
      console.log('unit', unit)
      console.log('frame', frame)

      images[`img-${unit}-${frame}`] = new Image();
      images[`img-${unit}-${frame}`].src = rawImages[unit][frame];
      images[`img-${unit}-${frame}`].onload = () => {
        createImageBitmap(images[`img-${unit}-${frame}`]).then(sprite => {
          preloadedImages[unit][frame] = sprite;
         });
      }
    }
  }

  return preloadedImages;
}

const RenderInitializer = (images) => {
  const start = new Date();

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const preloadedImages = ImagePreload(images);

  const initializedRenderData = {
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    ctx: ctx,
    preloadedImages: preloadedImages
  }

  const end = new Date();
  console.log('Render init time: ', end-start)

  return initializedRenderData
};

export { RenderInitializer };
