# Redesigning a Personal Website

Let's go on a little adventure today. We'll explore three intriguing chapters detailing how we brought our idea to life, creating a shiny new thing.

## Chapter 1: Redesigning with Next.js, TypeScript, and Tailwind CSS

To make this endeavor a success, we leveraged Next.js, version 13. Why Next.js? It's an open-source React framework that simplifies building web applications. I'm a big Next.js fanboy, and I'm not afraid to admit that.

We also added TypeScript and Tailwind CSS into the mix. Tailwind is something that I have plenty of experience with, but I have really wanted to implement TypeScript in more projects. 

TypeScript, a superset of JavaScript that has become incredibly popular as of late, ensures our code is robust and error-free. We keep all of our errors inside the code editor, where they'll never get to see the light of day. That's a beautiful thing. 

To add a touch of magic, we crafted a Spline mini room 3D-rendered scene for our hero section, tying everything together to complete our minimalistic design. I am a firm believer that sometimes, <span style="color:#a64dff">simple is better</span>.


## Chapter 2: The Spline Scene with React and Suspense

As we ventured further into web development, we discovered Spline scenes. These captivating 3D renderings breathe life into our website. But how do we bring them to life?

Using React, a popular JavaScript library, we unlocked a new dimension with Spline. To ensure a seamless journey, we employed a magical component called `Suspense`. It acts as a guardian, ensuring the scene appears only when it's ready.

```javascript
import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const MiniRoom: React.FC = () => {
  return (
    <Suspense fallback={<SplineImagePlaceholder/>}>
      <div className={`fade-in ${isLoaded ? 'show' : ''}`}>
        <SplineComponent />
      </div>
    </Suspense>
  );
};
```

### React: Crafting Enchanting Interfaces

React is at the heart of our magic, allowing us to create captivating user interfaces and seamlessly integrate 3D scenes.

#### Suspense: Ensuring Smooth Loading

With the `Suspense` component, we guarantee a smooth transition as our Spline scene appears fully prepared.

## Chapter 3: Unveiling Goodreads Reading Adventure

In our pursuit of a magical website, we aimed to share our literary adventures. Thus, we decided to display the book we're currently reading from our Goodreads profile. But how did we extract this precious information?

We turned to the Goodreads RSS feed, a treasure trove of reading updates. With a dash of code, we uncovered the book's title and a link to our Goodreads page. And just like that, our website came to life with our current reading escapade.

```javascript
// Parsing the Goodreads RSS feed
const bookTitleMatch = /<title>(.*?)<\/title>/i.exec(item.content ?? '');
const goodreadsLinkMatch = /<link>(.*?)<\/link>/i.exec(item.content ?? '');
```

### Goodreads RSS: The Literary Scroll

The Goodreads RSS feed is a scroll filled with tales of reading adventures. We got gritty with our data parsing to extract our book's title and link, so I can include a little blurb about the book we're currently into.

And So Our Tale Ends

In the world of web development, every line of code is a brushstroke on the canvas of the internet. Our journey brought us Next.js enchantments, 3D Spline scenes, and Goodreads literary adventures. There's always something new to discover, and our website is a reflection of the willigness to evolve and continue to try scary new things. Spline turned out to be a blast to use, and I can finally say that I'm starting to feel more comfortable with TypeScript. Onto bigger and better things, but this website overhaul was an awesome first step. Cheers 🪄📚🌐