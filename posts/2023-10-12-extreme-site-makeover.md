---
title: Extreme ~~Home~~ Site Makeover
description: Getting our site up to snuff
date: 2023-10-12
tags:
  - portfolio
  - next.js
  - typescript
  - tailwind
  - spline

---

# Beautifying Our Personal Site

Today we'll have a little fun as we dive into the process of getting my personal website up to snuff. It has been a long time since I first created it, and I like to think I've come a long way since then. While I will be updating it, I will also simplify our site to better suit the tone I am going for.

I'll slice up our journey into three distinct chapters detailing how I brought my vision to life, creating a shiny new thing for us to marvel at 🥳.

## Chapter 1: Retooling with Next.js, TypeScript, Tailwind, and Spline

To make this endeavor a success, we leveraged Next.js, version 13. Why Next.js? The open-source React framework simplifies building web applications and does a lot of the heavy lifting for us. I'm a big fan, and I appreciate how it's a tool that allows me to spend more time coding and less time head-scratching.

TypeScript, a superset of JavaScript that has become incredibly popular as of late, ensures our code is robust and error-free. We keep all of our errors inside the code editor, where they'll never get to see the light of day. That's a beautiful thing. 

I have also added Tailwind CSS into the mix. Tailwind is all over the place right now, and it's something that I have plenty of experience with so I like to think I know a little bit about how to wield it to accomplish my goals.

To add a touch of magic, we crafted a Spline mini room 3D-rendered scene for our hero section, tying everything together to complete our minimalistic design. I am a firm believer that sometimes, <span style="color:#a64dff">simple is better</span>.


## Chapter 2: The Spline Scene with React and Suspense

As we ventured further into development, I discovered `Spline`. These captivating 3D renderings breathe life into our website and add a nice artistic cherry on top of the sundae.

Using an ES6 import to load our scene from the `@spline/runtime` library, we unlocked a new dimension to really spice things up. To ensure a seamless journey, we employed a somewhat magical component called `Suspense`. It acts as a gatekeeper, ensuring the scene appears only when it's ready and fully loaded.


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

Using `DOMParser`, I was able to create a section that sifts through my Goodreads profile's RSS feed data and pulls out the title of the book I am currently reading so we can place it inside a little blurb in our hero section.

Using DOMParser required a little extra leg work, but was an intentional decision to prevent the use of additional dependencies and reduce overhead. By dynamically generating the book title, we avoid having to manually update the website every time that I start a new book.

#### At the End of the Rainbow

In the world of web development, every line of code is a brushstroke on the canvas that is the internet. It's an ocean out there, with rapidly changing currents and shifting seas. I'm just sailing along at my own pace, trying to enjoy the journey and soak it all in. ⛵️

There's always something new to discover, and the new website is a reflection of the progress I've made over the last couple of years. Spline turned out to be a blast to use, and I can finally say that I'm starting to feel more comfortable with TypeScript. Onto bigger and better things, but this website overhaul was an awesome first step.

Cheers 🧙‍♂️🎉


*fin* ᓚᘏᗢ