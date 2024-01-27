---
title: Player Statistics, Simplified
description: Drawing up our latest play – a new player statistics search feature
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

# Unleashing the Power of Player Statistics Search

Hey, me again.

It's been a while. Lately I've been working on a new feature for the Fieldwing that will give users the ability to search for player statistics. 📊

## The Opening Drive: Setting Up the Search Interface

Our first play from the line of scrimmage: provide users with the ability to fine-tune their searches based on various criteria. Customize stat searches with team, year, conference, start and end weeks, stat category, and season type. Offer up as much (or as little) information as you'd like to get the results you want, and avoid the results you don't want. Only the stat category is required, the rest of the options are there to create more targeted searches and filter out unwanted statistics.

## Table Talk: Displaying and Sorting Player Stats

Now, let's talk about the heart of the action – the player statistics data table. I've built a display that not only showcases the stats but also allows you to sort them with ease. Users can arrange data by player name, team, and various statistics, with each table header serving as a sort button.

The user interface is designed to be responsive and snappy, ensuring a seamless experience whether you're huddled around a desktop or on the move with your mobile device, without over-complicating the process. An HTML table to display our stats isn't exactly the Mona Lisa of web design, but it's an option that makes sense, serves its purpose, and gives users the ability to easily sort and organize their search results.


## Hot Routes: Simplifying the Overall Experience

Users want to receive their stats faster than Devin Hester returning a punt down the sideline. Nobody likes sitting there looking at the spinning wheel of doom while their data loads. We're all getting a bit spoiled with these load times now, don't you think? 😉

To limit the frustration, I made sure the search form was concise and easy to understand. Just a bit of hand-holding to let you know what stat categories are available, and the rest is up to you to explore. No trick plays here, just the freedom to view whatever you want, whenever you want.

## Taking the Field: Paginating Player Stats

Alright! We got our player stats feature up and running. Everyone lived happily ever after! Right? 🧚‍♀️

Not quite...After encountering a couple situations where the search results were obnoxiously long, mostly due to loose search constraints producing an endless list of results, I decided that we needed to control the amount of data we displayed at any given time. So, we cooked up a little pagination magic. 🧙 

Before we get into the nitty-gritty, I though it'd be worth discussing why pagination is an important addition to web apps, especially when working with API data:

*Performance Optimization:*
  Transmitting a large dataset in a single response leads to slow and resource-intensive operations. Pagination divides the dataset into smaller segments, allowing the API to deliver data more swiftly and efficiently.

*Memory Efficiency:*
  Processing a large dataset consumes a substantial amount of memory, particularly on resource-limited devices such as mobile phones or embedded systems. Pagination helps manage memory usage by restricting the data stored in memory at any given time.

*User-Friendly Interface:*
  In applications displaying data to users, pagination contributes to a smoother user experience. It ensures faster access to initial results, promoting a more responsive interface. Users can easily request additional data when needed, enhancing overall usability.

So, let's quickly run through the steps taken to implement pagination. Let's start by analyzing our StatSearch component. We can utilize the URL parameters `limit` and `skip` during form submission to establish both the number of items per page, and the starting index for retrieving data from the CFBD API. With dynamic URL construction, users may explore player stats without feeling bogged down with slow loading times or endless scrolling.

```typescript
let pageSize: number = 16;
$: currentPage = (Number($page.url.searchParams.get('skip')) || 0) / pageSize;
```

From there, we can head over to our `+page.svelte` route, which displays the player stats that have been fetched from the API according to our form's submission data. Displaying a reasonable amount of data on each page (the number of items is an arbitrary number, which can be controlled based on your specific use-case) and calculating the total number of pages became pivotal for a much more user-friendly experience.

```typescript
let pageSize: number = 16;
$: totalItems = playerData ? playerData.total : 0;
$: totalPages = Math.ceil(totalItems / pageSize);
$: currentPage = Number($page.url.searchParams.get('skip')) / pageSize || 0;
```

## Our Bell-Cow Back: Interactive Pagination Controls

Use your imagination: what's pagination without a little navigation? 🤔 By introducing intuitive pagination controls, you can jump between pages quickly and efficiently. Each page number is a clickable link, allowing users to navigate through the player stats playbook with a single click.

```html
<div class="pagination" class:light={!$theme} class:dark={$theme}>
    {#each Array(totalPages) as _, idx}
        <a href="?limit={pageSize}&skip={pageSize * idx}" class="pagination-item {currentPage === idx ? 'active' : ''}">
            {idx + 1}
        </a>
    {/each}
</div>
```

With pagination, users can fetch player statistics from any year, any week, any time. Hurray for football analytics! 🏈🚀

In the fast-paced world of football, precision matters. No more sifting through and endless wall of stats – unless, of course, you want to!

And there you have it – our journey to bring you a dynamic and user-friendly football player statistics search. I hope you enjoy exploring the world of college football statistics as much as I enjoyed creating it. Stay tuned for the next round of updates in the near future!

*fin* ᓚᘏᗢ