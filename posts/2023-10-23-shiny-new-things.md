# Redesigning a Personal Website

Let's go on a little adventure exploring how we brought our idea to life, creating a shiny new thing (in the form or a redesigned personal website).

## Chapter 1: Foundations with Next.js, TypeScript, and Tailwind CSS

To make this endeavor a success, we leveraged Next.js, specifically ersion 13. Why Next.js? The open-source React framework simplifies our build process, and generally feels super intuitive to use. I'm Next's #1 fan minus the giant foam finger, and I'm not ashamed to admit it.

I've also included TypeScript and Tailwind CSS in the mix. Tailwind is a tool that I have plenty of experience with, but I have really wanted to buckle down and start implementing TypeScript in more projects. 

TypeScript, a superset of JavaScript that has become incredibly popular as of late, ensures our code is robust and error-free. We keep all of our errors inside the code editor, where they'll never get to see the light of day ☀️. That's a beautiful thing. 

To add that little extra touch of magic, I have crafted a Spline mini room 3D-rendered scene for our hero section, which helps tie everything together to complete our minimalistic design. I am a firm believer that sometimes, <span style="color:#a64dff">simple is better</span>.


## Chapter 2: Spline and Suspense and React, Oh My 😱

Spline helps users create captivating 3D renderings, breathing some life into our website. 

Using React to import our Spline scene, we unlocked a new dimension with Spline. To ensure a seamless journey, we employed a magical component called `Suspense`. It acts as a guardian to save your eyes from blank screens and loading wheels, ensuring the Spline scene appears only when it's ready and not a moment before.

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


## Chapter 3: Goodreads and Good Times

In our pursuit of happiness, I decided to add a little blurb to display the book we're currently reading, pulled from our Goodreads profile. But how did we extract this information, since Goodreads has revoked their distribution of API keys for developers?

We turned to the Goodreads RSS feed, a treasure trove of reading updates. Okay, maybe that's a bit dramatic, but it's an efficient and simple way to access the book's title using our Goodreads profile data. We got a little clever with our data parsing to extract our book's title and link and leave out the junk, so I can include a little section about the book we're currently into.

```javascript
// Parsing the Goodreads RSS feed
const bookTitleMatch = /<title>(.*?)<\/title>/i.exec(item.content ?? '');
const goodreadsLinkMatch = /<link>(.*?)<\/link>/i.exec(item.content ?? '');
```

And just like that, we've got action! This method prevents the need for manual updates every time I start a new book.


## All good things must come to an end...

In the dynamic world of development, every line of code is a brushstroke on the canvas, building up the bigger picture. It's hard to leave your mark, but I would still like to to take pride in my little corner of the internet. Overall, Spline turned out to be a blast to use, and I can finally say that I'm starting to feel more comfortable with TypeScript. Onto bigger and better things, but this website overhaul was an awesome first step. Cheers! 🏖🍻