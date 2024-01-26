---
title: Fieldwing -- The Xs and Os
description: Refining our fetch request to ensure error-free API interactions
date: 2023-12-04
tags:
  - svelte
  - sveltekit
  - fieldwing
  - college football
  - web application
  - api integration
  - CFBD API
  - string manipulation
  - array filter
---

#  Refining Our CFBD API Data Retrieval

Hello again! 👋 Continuing from our [last post](https://www.jcoletta.com/sveltekit-magic/), I'm still plugging away at Fieldwing. This week, we will be diving into the problem refining the search for selected teams by omitting mascot names from each API fetch request. Let's take a look at the problem, then explore the steps we took to enhance this crucial component.

## Throwing the Challenge Flag

In our interactions with the College Football Data (CFBD) API, a hurdle emerged in the search query for selected teams. We allow the user to select teams from a list, and any team they select is added into a `selectedTeams` writable [Svelte store](https://svelte.dev/docs/svelte-store). The team contains both the school name and the team name, or in other words the mascot. However, come to find out that the CFBD API is only able to process school names, so we had to ditch the mascot names before submitting our fetch request. 

For example, if the user wanted to search for game results for the `Clemson  Tigers`, the API returned an empty array *unless* we filtered the `Tigers` out of the `selectedTeams` string, which would result in the submission of **only the school name**. In this case `Clemson` was the key to our data that was locked behind CFBD's doors, but we had to manipulate the string to get rid of the mascot name before we could make a proper fetch request.

Attempts to submit the full string led to empty responses for certain team selections, which snowballed into undefined data, API errors, and all of that other fun stuff. So there we have it, now let's get problem solving.

## The Play Is Under Review

The first play from the line of scrimmage involved dissecting the full selected team string, filtering out words present in the array which contained of all of the mascot names, and then reassembling the remaining words into the school name, which we submit in our fetch request URL. I was splitting the full team string into individual words, adding spaces to separate them, and filtering out words that matched any strings present in the mascot names array.

Let's take a look at the first attempt, to help you visualize idea the solution that was on the right track, but ended up giving us a bit of trouble:

```typescript
function getSchoolName(fullTeamName: string): string {
  // Here we extract the school name from the full team name
  const parts = fullTeamName.split(' ');

  // Remove common mascots from the team name
  const filteredParts = parts.filter(part => !mascotNames.includes(part));

  return filteredParts.length > 1 ? filteredParts.slice(0, -1).join(' ') : fullTeamName;
}
```

Seems great, right? Probably not if you're a better programmer than me, but that's beside the point.

Unfortunately, this method fell short when dealing with multi-word school or mascot names, leading to cases where there was only partial removal of the mascot name. So, while `Clemson Tigers` was able to be successfully processed, a multi-word string such as `Alabama Crimson Tide` would end up looking something like `Alabama Crimson`, which returned an empty array as our API response, instead of the desired game data. The unexpected behavior occurred when the school name had multiple words, as the filtering logic treated each word independently. Back to the drawing board!

So, instead of filtering each word, I decided to iterate over the entire selected team and check if the full remaining substring is a mascot name. The main goal was to make sure the remaining substring (created by combining the remaining words) did not contain any of the mascot names. We loop through, identifying and removing any substrings that match the multitude of mascot names, so eventually we are left with the school name.

Let's have a glance at the updated version of the `getSchoolName` function to help visualize the changes:

```typescript
function getSchoolName(fullTeamName: string): string {
	// Split the full team name into parts
	const parts = fullTeamName.split(' ');

	// Iterate over the parts to filter out mascots from the team name
	let filteredParts: string[] = [];
	for (let i = 0; i < parts.length; i++) {
		const remainingSubstring = parts.slice(i).join(' ');

		if (!mascotNames.includes(remainingSubstring)) {
			filteredParts.push(parts[i]);
		}
	}

	return filteredParts.join(' ');
}
```

Time to get into the nitty-gritty and break down this function into some bite-sized chunks, to gain a better understanding of exactly what I had to do to bring this thing to the finish line:

```typescript
function getSchoolName(fullTeamName: string): string {
  // Step 1: Split the full team name into an array of parts
  const parts = fullTeamName.split(' ');

  // Step 2: Remove common mascots from the team name
  const filteredParts = parts.filter(part => !mascotNames.includes(part));

  // Step 3: Check if there are more than one filtered parts
  // If yes, join all parts except the last one to form the school name
  // If no, return the full team name
  return filteredParts.length > 1 ? filteredParts.slice(0, -1).join(' ') : fullTeamName;
}
```

Now, let's explain each step:

1. **Splitting the Full Team Names:**
   ```typescript
   const parts = fullTeamName.split(' ');
   ```
   Here, `split(' ')` is used to split the `fullTeamName` into an array of parts based on the space character. For example, if `fullTeamName` is "South Carolina Gamecocks," then `parts` would be `["South", "Carolina", "Gamecocks"]`.

2. **Filtering Out Known Mascots:**
   ```typescript
   const filteredParts = parts.filter(part => !mascotNames.includes(part));
   ```
   This step filters out any mascot names, which can be found in our mascot data, from the array of parts. The `filter` function is used to keep only the parts that are *not* included in the `mascotNames` array. For instance, if `mascotNames` includes "Tarheels," and the `fullTeamName` is "North Carolina Tarheels" then our `filteredParts` would end up as `["North", "Carolina"]`.

3. **Forming the School Names:**
   ```typescript
   return filteredParts.length > 1 ? filteredParts.slice(0, -1).join(' ') : fullTeamName;
   ```
   The final step checks if there is more than one filtered part. If there is, it joins all parts except the last one to form the school name. If not, it returns the full team name.

The function is designed to extract the school name from the full team name, considering common mascots and handling cases where there might be multiple parts in the team name in the same way that we would manipulate our simpler cases containing one-word schools and mascot names, such as `Akron Zips`.

It's a practical, simple solution that had a big impact. Touchdown! 🎉

## Gaining the Advantage

Our new and improved code helps accurately handle multi-word school names in the context of processing our selected teams Svelte store. The primary objective? Interacting seamlessly with the College Football Data (CFBD) API. Pretty sweet!

Just to circle back real quick and review the goal: we needed clean school names devoid of school mascot references to correctly fetch game data from the CFBD API. To achieve this, I crafted a function to filter out and discard mascot names from our selected teams, ensuring that the subsequent fetch request URL would only contain school names, allowing us to receive a proper, error-free response from the API.

In summary, the changes guarantee that our data retrieval process aligns with the expectations for the API's URL, which allows us to continue our journey down the sidelines and bring it on home.

## Studying the Game Tape
 
Through iterative problem-solving and deliberate, purposeful adjustments to the way we are sending and receiving data, we have eliminated any inaccuracies in our API fetch requests. 

For now...🤞

Going forward, I will continue working on expanding Fieldwing's functionality over the next couple weeks, while juggling the busy holiday season. I am planning on creating a new feature that will allow users to compare the historical head-to-head results of two teams to see who has had the upper-hand over the years. I'm only adding this new feature to antagonize Ohio State and Michigan fans. 🤫

Thanks for reading, I appreciate you. Take care!

*fin* ᓚᘏᗢ
