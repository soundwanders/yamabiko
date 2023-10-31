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

# Beautifying My Personal Site

Today we'll have a little fun as we dive into the process of getting my personal website up to snuff. It has been a couple of years since I first created it, and I like to think I've come a long way since then! The goal was to trim the fat, keep it lightweight, and craft a minimal-style design that feels more like "me". I'm calling it my digital oasis.

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

While the goal was always simplciity, I aimed to share my literary adventures because I'm a huge bookworm. I settled on the decision to display the book we're currently reading, pulling the book title from our Goodreads profile. I don't want to have to manually update the book each time I begin a new one, that was clear, but I did have to decide what method to use to get the job done simply and effectively.

We could have used something like a web scraping script to extract what we need, but it's a little less ethical than the solution I settled on: `RSS`! I turned to the Goodreads RSS feed to access all my profile's data, pulling out the little bit of info that we need without disturbing the peace. With a dash of code and some regular expressions,we've got what we need. 

```javascript
// Parsing the book title from RSS data
const bookTitleMatch = /<title>(.*?)<\/title>/i.exec(item.content ?? '');
const goodreadsLinkMatch = /<link>(.*?)<\/link>/i.exec(item.content ?? '');
```

Using DOMParser required a little extra leg work, but was an intentional decision to prevent the use of additional dependencies and reduce overhead.

If you'd like to read a little bit more about the process of using the DOMParser to accomplish our goal, I encourage you to visit my other blog post 👉 [RSS Showdown](https://yamabiko.vercel.app/rss-showdown/). 


#### We Reach End of the Rainbow

In the world of web development, every line of code is a brushstroke on the canvas that is the internet. It's an ocean out there, with rapidly changing currents and shifting seas. I'm just sailing along at my own pace, trying to enjoy the journey and soak it all in. ⛵️

There's always something new to discover, and the new website is a reflection of the progress I've made over the last couple of years. Spline turned out to be a blast to use, and I can finally say that I'm starting to feel more comfortable with TypeScript. Onto bigger and better things, but this website overhaul was an awesome first step.

Cheers 🧙‍♂️🎉


*fin* ᓚᘏᗢ