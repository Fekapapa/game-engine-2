'use strict'

import { GetState } from '../main.js';

let timerHelper = 0;

const RenderFlippedElement = (ctx, frame, element) => {
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(
    frame,
    - element.dx - element.width / 2,
    720 - element.dy - element.height / 2
  )
  ctx.restore();
}

const RenderHealthBar = (ctx, element) => {
  ctx.fillStyle = 'red';
  ctx.fillRect(
    element.dx - element.width / 2,
    720 - element.dy - element.height / 2 - 10,
    element.width, 2
  );

  ctx.fillStyle = 'green';
  ctx.fillRect(
    element.dx - element.width / 2,
    720 - element.dy - element.height / 2 - 10,
    Math.round(element.width * element.healthBar), 2
  );
}

const RenderNormalElement = (ctx, frame, element) => {
  if (element.type === "iceElemental") {
    //console.log(frame)
    //console.log(element.frame)
  }
  ctx.drawImage(
    frame,
    element.dx - element.width / 2,
    720 - element.dy - element.height / 2
  )
}

const RenderRotatedElement = (ctx, preloadedImages, element) => {
  ctx.save();
  ctx.translate(element.dx, 720 - element.dy);
  ctx.rotate(element.angle);
  ctx.drawImage(
    preloadedImages[element.type][element.frame],
    - element.width / 2, -element.height / 2
  );
  ctx.restore();
}

const Render = (data) => {
  timerHelper += 1;
  const start = new Date();
  const state = GetState();
  const initData = state.initializedRenderData;
  const preloadedImages = initData.preloadedImages;
  const ctx = initData.ctx;
  ctx.clearRect(0, 0, initData.canvasWidth, initData.canvasHeight);

  let length = data.length;

  const sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  while (length--) {
    const element = sortedData[length];
    const frame = preloadedImages[element.type][element.frame];

    if(element.healthBar) {
      //RenderHealthBar(ctx, element);
    }

    if (frame) {
      if(element.facing === 'left') {
        RenderFlippedElement(ctx, frame, element);
      } else if (element.angle) {
        //RenderRotatedElement(ctx, preloadedImages, element);
      } else {
        RenderNormalElement(ctx, frame, element);
      }
    }

    //********************************************//
    // this only helps to test collision detection
    /*if (element.type === "archerTowerBasic") {
      ctx.strokeStyle = "rgb(250, 30, 30)"
      ctx.beginPath();
      ctx.arc(element.dx, 720 - element.dy, 200, 0, Math.PI * 2, true); // Outer circle
      ctx.stroke();
    }
      ctx.beginPath();
      ctx.arc(element.dx, 720 - element.dy, 1, 0, Math.PI * 2, true); // Inner circle
      ctx.arc(element.dx, 720 - element.dy, 2, 0, Math.PI * 2, true); // Inner circle
      ctx.stroke();*/
    //********************************************//
  }

  const end = new Date();

  if (timerHelper % 60 === 0) {
    //console.warn('Total render time: ', end-start + ' ms')
  }
}

export { Render };
