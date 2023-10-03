---
title: Preparing for Takeoff
description: Implementing our 3D scene
date: 2023-10-02
tags:
  - spline
  - 3D design
  - canvas
  - esbuild
  - es6 modules

---

# Welcoming our Spline 3D Mini-Room Scene to the Family

It felt good to place the finishing touches on our Spline mini-room scene over the weekend. Now it's time to get this bad boy up and running. Implementing our 3D scene into our Eleventy website has posed a few challenges, mainly stemming from the fact that Eleventy is not able to handle the import of ES6 modules out of the box.

First, we created our `spline.js` file, which ended up being pretty straightforward using the `<canvas` HTML element to help render our scene.

```javascript
// spline.js file will render our 3D Mini-Room scene
import { Application } from '@splinetool/runtime';

document.addEventListener("DOMContentLoaded", function () {
  const canvasContainer = document.getElementById('canvas-container');
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';
  canvasContainer.appendChild(canvas);

  const app = new Application(canvas);
  app.load('https://prod.spline.design/akcFqsZFMTcrVJTi/scene.splinecode');
});

```

That was easy enough. The first problem arises from the module import, `@splinetool/runtime`, which throws the error `Uncaught TypeError: The specifier “@splinetool/runtime” was a bare specifier, but was not remapped to anything. Relative module specifiers must start with “./”, “../” or “/”.`

To overcome the issue of not being able to use ES6 module imports in our Eleventy project, I decided to use something like `esbuild`, a small, lightweight bundler written in <span style="color:#99ffff">Go</span>. Our use-case called for something much lighter than a tool like Webpack, because we don't need any fancy custom configuration options, but it wasn't as straightforward as I would have liked. So, the journey continues.

After installing `esbuild` as a dependency, we have to set it up. Our configuration file ended up looking like this:

```javascript
// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./assets/js/spline.js'],
  bundle: true,
  outfile: './_site/bundle.js', 
}).catch(() => process.exit(1)); // Exit with an error code on build failure
```

As you can see, the `esbuild.config.js` file simply generates the bundle and pushes it to our output directory (`_site`). To get it over the finish line, we have to overcome a small error. We are currently dealing with `Loading module from “http://localhost:8080/_site/bundle.js” was blocked because of a disallowed MIME type (“text/html”).`

In the next post, we will go through the process of how I solved this problem to get our scene rendered and working properly. For now, I'm tired and it's time to call it a day. Thanks for reading!


*fin* ᓚᘏᗢ