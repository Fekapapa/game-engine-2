'use strict'

const shadowCanvas = document.createElement('canvas');
shadowCanvas.height = 1080;
shadowCanvas.width = 1920;
const shadowCanvasCtx = shadowCanvas.getContext('2d');

// Standard resizing: 1080p => 720p
const ImageResizer = (image, targetSize = '720p' ) => {
  let width = 0;
  let height = 0;
  shadowCanvasCtx.clearRect(0, 0, image.width, image.height);

  if (targetSize === '720p') {
    width = image.width / 3 * 2;
    height = image.height / 3 * 2;
  }

  shadowCanvasCtx.drawImage(image, 0, 0, width, height);
  return shadowCanvasCtx.getImageData(0, 0, width, height);
}

const ImagePreloader = (rawImages, resolution, start) => {
  const preloadedImages = {};
  const images = {};
  const pathToImages = './engine-core/assets/images/'

/*const units = Object.keys(rawImages);
const unitIndex = 0;
const unitLoader = (unitIndex) => {
  const unit = units[unitIndex];
  preloadedImages[unit] = {};

  const frames = Object.keys(rawImages[units[unitIndex]])
  const frameIndex = 0;
  const frameLoader = (frameIndex) => {
    const frame = frames[frameIndex];

    images[`img-${unit}-${frame}`] = new Image();
    images[`img-${unit}-${frame}`].src = `${pathToImages}${rawImages[unit][frame]}`;
    images[`img-${unit}-${frame}`].onload = () => {
      const resizedImageData = ImageResizer(images[`img-${unit}-${frame}`], resolution);
      createImageBitmap(resizedImageData).then(sprite => {
        preloadedImages[unit][frame] = sprite;
       });

       if (frames[frameIndex + 1]) {
         frameIndex++
         frameLoader(frameIndex)
       } else {
         if (units[unitIndex + 1]) {
           unitIndex++
           unitLoader(unitIndex)
         }
       }
    }

    if (!frames[frameIndex + 1] && !units[unitIndex + 1]) {
      const end = new Date();
      console.log('Render init time2: ', end-start)

    }
  }
  frameLoader(frameIndex)
}
unitLoader(unitIndex)*/

  for (let unit in rawImages) {
    preloadedImages[unit] = {};

    for (let frame in rawImages[unit]) {
      images[`img-${unit}-${frame}`] = new Image();
      //images[`img-${unit}-${frame}`].src = rawImages[unit][frame];
      images[`img-${unit}-${frame}`].src = `${pathToImages}${rawImages[unit][frame]}`;
      images[`img-${unit}-${frame}`].onload = () => {
        //preloadedImages[unit][frame] = ImageResizer(images[`img-${unit}-${frame}`]);
        //console.log('imagedata', ImageResizer(images[`img-${unit}-${frame}`]))
        const resizedImageData = ImageResizer(images[`img-${unit}-${frame}`], resolution);
        createImageBitmap(resizedImageData).then(sprite => {
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
  const preloadedImages = ImagePreloader(images, '720p', start);

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
