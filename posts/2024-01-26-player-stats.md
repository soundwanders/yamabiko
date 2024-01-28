---
title: Player Statistics, Simplified
description: Drawing up a player stats search feature
date: 2024-01-26
tags:
  - svelte
  - sveltekit
  - fieldwing
  - college football
  - CFBD API
  - statistics
  - data sorting
  - pagination
  - url parameters
---

# Player Stats & Pagination

Hey, how's it going!  It's been a while but we're back at it. Lately I've been working on a new feature for the Fieldwing that gives users the ability to search for player statistics, plus a little pagination to help smooth out the stat surfing.

## The Opening Drive: Setting Up the Search Interface

Our first play from the line of scrimmage: provide users with the ability to fine-tune their searches based on various criteria. I created a form that provides the option to customize searches with team, year, conference, start and end weeks, stat category, and season type. Offer up as much (or as little) information as you'd like to get the results you want, and avoid the results you don't want. Only the stat category is a required, the rest of the fields are there to create more targeted searches and filter out unwanted statistics.

## Table Talk: Displaying and Sorting Player Stats

Now, let's get to the heart of the action – the player statistics data table. I've built a display that not only showcases the results, but also allows you to sort them with ease. Users can arrange data by player name, team, and various statistics, with each table header serving as a sort button.

The user interface is designed to be responsive and snappy, ensuring a seamless experience whether you're huddled around a desktop or on the move with your mobile device, without over-complicating the process. Our solution is the ol' reliable `<table>` element. An HTML table to display our stats isn't exactly the Mona Lisa of web design, but it's a desitn choice that serves its purpose and gives users the ability to easily sort and organize their search results in a clean and readable format.

## Taking the Field: Simplifying the Overall Experience

Users want to receive their stats faster than Devin Hester returning a punt down the sideline. Or atleast close to it. Nobody likes sitting there looking at the spinning wheel of doom while their data loads...eventually.

To limit the frustration, I made sure the search form was concise and easy to understand. To assist users who might not have intimate knowledge of football statistics, just a tiny bit of hand-holding in our categories field lets users know what stat categories are available, and the rest is fair game. No trick plays here, just the freedom to view whatever you want, whenever you want.

## Hot Routes: Paginating API Data

Alright! We got our player stats feature up and running. Everyone lived happily ever after! Right? 🧚‍♀️

Not quite...After tinkering with our player stats feature, I began encountering situations where the search results were exceedingly long, mostly due to loose search constraints producing a seemingly endless list of results. I decided that we needed to get a lid on things and control the amount of data we displayed at any given time. So, we cooked up a little pagination magic. 🧙 

Before we get into the nitty-gritty, this is a good opportunity to highlight why pagination is an important addition to web apps, especially when working with API data:

*Performance Optimization:*
  Transmitting a large dataset in a single response leads to slow and resource-intensive operations. Pagination divides the payload into smaller segments, allowing the API to deliver data more swiftly and efficiently.

*Memory Efficiency:*
  Processing a large dataset consumes a substantial amount of memory, particularly on resource-limited devices such as mobile phones or embedded systems. Pagination helps manage memory usage by restricting the data stored in memory at any given time.

*User-Friendly Interface:*
  In applications displaying data to users, pagination contributes to a smoother user experience. It ensures faster access to initial results, promoting a more responsive interface. Users can easily request additional data when needed, enhancing overall usability.

Seems pretty solid! So, let's quickly run through the steps taken to implement pagination. We can start by analyzing our StatSearch component. Utilizing the URL parameters `limit` and `skip` during form submission helps establish both the number of items per page, and the starting index for retrieving data from the CFBD API. With dynamic URL construction, users may explore player stats without feeling bogged down with slow loading times or endless scrolling.

```typescript
let pageSize: number = 16;
$: currentPage = (Number($page.url.searchParams.get('skip')) || 0) / pageSize;
```

From there, we can head over to our `+page.svelte` connected to our player stats route, which is our client-side display for the data that was fetched from the API according to our search form submission. Displaying a reasonable amount of data on each page (the number of items is an arbitrary number, which can be controlled based on your specific needs) and calculating the total number of pages became pivotal for a much more user-friendly experience.

```typescript
let pageSize: number = 16;
$: totalItems = playerData ? playerData.total : 0;
$: totalPages = Math.ceil(totalItems / pageSize);
$: currentPage = Number($page.url.searchParams.get('skip')) / pageSize || 0;
```

## Our Bell-Cow Back: Interactive Pagination Controls

What's pagination without a little navigation? 🤔 By introducing intuitive pagination controls, you can jump between pages quickly and efficiently. Each page number is a clickable link, allowing users to navigate through the player stats playbook with a single click.

In the code below, we use a loop construct to iterate over an array of length `totalPages`. The loop variable `idx` represents the current index in the iteration. Inside the loop, we generate a link element for each page. The href attribute is constructed with the query parameters `limit` and `skip` that we use for pagination, which circles back to the pageSize and the current index (idx). Since array indices are zero-based, `idx + 1` is used to display the page number, starting from 1.

```html
  {each Array(totalPages) as _, idx}
    <a href="?limit={pageSize}&skip={pageSize * idx}" class="pagination-item {currentPage === idx ? 'active' : ''}">
      {idx + 1}
    </a>
  {/each}
```

And that'll do it! In the fast-paced world of football, precision matters and the margin of error is slim. No more scrolling down an endless wall of data – unless, of course, that's what you're after.

AThere you have it – our journey to bring you a dynamic and user-friendly football player statistics search has come to a close. The additional implementation kf pagination is just the cherry on top of the sundae.

Working on Fieldwing has been a blast, and I learn more about working within the SvelteKit environment every step or the way. Stay tuned for the next round of updates, which I hope to launch in the near future. Thanks for reading, I appreciate you.  🏈🚀

*fin* ᓚᘏᗢ
