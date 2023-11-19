---
title: Fieldwing -- A SvelteKit Production
description: Cooking up some SvelteKit magic
date: 2023-11-19
tags:
  - svelte
  - sveltekit
  - fieldwing
  - college football
  - web application
  - api integration
---

# 🌊 Diving Head-first Into SvelteKit

Lately, I've been interested in trying to explore new technologies. After spending so much time working with React, I figured it was time to switch gears for a little bit. My goal was to learn something new and gain a fresh perspective on building for the web. After poking my head into several different doorways, I caught wind of what Rich Harris and the Svelte team [have been up to lately](https://thenewstack.io/rich-harris-talks-sveltekit-and-whats-next-for-svelte/). While Svelte is perfectly viable on its own, I knew I'd be doing some routing and server-side rendering so I chose [`SvelteKit`](https://kit.svelte.dev/), which is their full-stack framework for building web applications. SvelteKit might not be the React-killer everybody seems to be on the lookout for, but it is blazing fast with concise syntax and flexible enough to accomodate a wide variety of use-cases. To take it straight from the horse's mouth: **`It's a love letter to web development.`**

So, we have decided on SvelteKit as our vehicle for growth 🚗. With that settled, I dove right into building `Fieldwing`, a website that will allow users to track scores and statistics for their favorite college football teams. Users will be able to search for college teams from both the FBS and FCS conferences, select their preferred teams from a list, then make an API call to fetch relevant data about all selected teams from the College Football Database. It's not a revolutionary application of course, but it's one that I think a few of my friends and family will enjoy messing around with. After all, the goal here is to learn, not change the world. Gotta stretch the brain out a little from time to time! 🧠

Our application is not exactly laser-focused yet, as I have two very different paths that I am considering. Let's hit the brakes and take a look at our fork in the road:

1. Users can sign up to track the game results and statistics of their favorite college football team on a weekly basis. Users can sign up via e-mail to receive a weekly message containing their team's game results and important statistics such as touchdown scoreres, turnovers, and so on. We could schedule our weekly communications using a 🤖 Cron job, or another similar method.

2. Users can select two teams to compare and we will fetch the history of their head-to-head matchups. We'll want to display things like the total win-loss records, scores of each game, the dates they played, and any other interesting statistics that will give a snapshot of the battles over the years. For example, when a Michigan fan wants to brag about how they beat their bitter rival Ohio State `36-0` in **1897**, they can send (*insert Ohio State fan name here*) a link to Fieldwing containing the all-time history of the two school's meetings.


## 📒 The Playbook

So far, I've been mainly focused on fleshing out ideas and expanding ideas into prototypes while I get accustomed to the SvelteKit ecosystem and syntax. I've come up with a high-level overview of our work-in-progress, which should give you an idea of what Fieldwing is all about in its current state. We're just barely poking out of the soil, but we'll get this little sapling grown eventually! 🌱

- **Responsive, Aesthetic Design:**
  - Modern, minimalist design, focusing on clean presentation of content and pleasant color contrast.
  - Getting back to our roots, avoiding things like Tailwind or Sass and relying solely on vanilla CSS.
  - Implement a responsive design that works with the browser, not fighting against it.
  - Boost our responsiveness with the help media queries, without relying too heavily on them ("less is more" design principle).
  - Create a visually appealing and user-friendly UI that flows well, is fully accessible, and easy to navigate.

- **Light and Dark Theme Modes:**
  - Implement a theme-switching functionality allowing users to toggle between light and dark themes.
  - Apply theme styles across different components for a consistent user interface in all routes.
  - Use CSS variables to define and manage color themes.

- **Team Selection:**
  - Create a `Team Selection` page where users choose their favorite college football team, or multiple teams if their allegiances are split.
  - Utilize Svelte stores (such as our `$selectedTeams`) to manage and store the selected teams.
  - Provide a UI for users to select teams from a list of conferences and display the selected teams.

- **Submit Button to Trigger the Workflow:**
  - Implement a submit button on the `Selection` page that will begin the chain reaction of our app's ultimate purpose: to fetch college football data.
  - The submit button will bring the user to the page where they will see all relevant data, with the data fetching being done behind the scenes and organized properly for easy-to-digest content.

- **API Interaction:**
  - Fetch data from the `College Football Data` (CFBD) API and format it for readability and usability.
  - Display relevant team data such as the date, location, results, stats, and any other pertinent data.
  - Implemented server-side rendering (SSR) for the `+page.svelte` route using `+page.server.ts` to fetch data.

- **Routing and URL Handling:**
  - Configure routes in SvelteKit to create a workflow that does the heavy lifting for us. Simple is good, we like simple!
  - Dynamic URL handling built around the teams that were selected by the user, because why not?

Check back later to see how things progress, as I'll be continuing to document my SvelteKit journey throughout. Thanks for stopping by!

*fin* ᓚᘏᗢ
