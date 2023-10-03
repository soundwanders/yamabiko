// spline.js
import { Application } from '@splinetool/runtime';

document.addEventListener("DOMContentLoaded", function () {
  const canvasContainer = document.getElementById('canvas-container');
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';
  canvasContainer.appendChild(canvas);

  const app = new Application(canvas);
  app.load('https://prod.spline.design/akcFqsZFMTcrVJTi/scene.splinecode');
});
