---
title: "Studying the Playbook: Fixing our Fetch Requests"
description: Building a function to manipulate strings and ensure error-free API interactions
date: 2023-12-04
tags:
  - svelte
  - sveltekit
  - fieldwing
  - college football
  - web application
  - CFBD API
  - api integration
  - string manipulation
---

#  The Xs and Os: Refining Our CFBD API Fetch Request

Hello again! 👋 Continuing from our [last post](https://www.jcoletta.com/sveltekit-magic/), I'm still plugging away on the Fieldwing development. This week, we will be diving into the problem refining the search for selected teams by omitting mascot names from each API fetch request. Let's take a look at the problem, then explore the steps we took to enhance this crucial component.

## Throwing the Challenge Flag

In our interactions with the College Football Data (CFBD) API, a hurdle emerged in the search query for selected teams. The API demanded school names, minus the mascot names. So, if we were to search for `Clemson  Tigers`, the API would return an empty array *unless* we filtered the `Tigers` out of the string, resulting in the submission of **only the school name**. In this case `Clemson` was the key to our data locked behind CFBD's doors, but we had to manipulate the user selection string before we could make a proper fetch request. Our initial implementation led to empty responses for certain team selections, which snowballed into undefined data, API errors, and all of that other fun stuff.

## First Attempt

The initial strategy involved dissecting the full team name, filtering out words present in the `mascotNames` array, and then reassembling the remaining words into the school name. Unfortunately, this method fell short when dealing with multi-word school names. So, while `Akron Zips` was able to be processed, a multi-word string such as `North Carolina Tarheels` would still return an empty array.

## Reviewing the Tape

Upon close inspection, I noticed a flaw in handling multi-word school names. For example, team names like "Alabama Crimson Tide" were inadvertently including terms like "Crimson Tide" in the search, resulting in empty API responses.

## Finetuning the Logic

 Instead of independently filtering each word, I was able to iterate over the team strings, checking if the entire remaining substring (formed by joining the remaining words) constituted a mascot name. If not, the word was added to the filtered parts.

## A Little Mascot Mash-Up

To remedy the problem, I revisited the `getSchoolName` function. The key? A straightforward mascots.ts file which contained an array of every mascot from all of the teams contained in our data.

With our fancy new list of mascot names, I was able to systematically extract the mascots from the selected team strings. The main goal was to make sure the entire remaining substring (created by combining the remaining words) did not contain any of the mascot names. Any match resulted in prompt removal, and eventually, if all goes according to plan, we are only left with the school name.

The introduction of the mascots.ts file not only simplified our logic, but also strengthened the ability to accurately identify and eliminate mascot names. It's a practical, simple solution that had a big impact. Touchdown! 🎉

## Code Implementation

```typescript
// Function to extract the school mascots/team names from the full team name
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

## Advantages of the Update

Our new and improved code helps accurately handle multi-word school names in the context of processing our selected teams Svelte store. The primary objective? Interacting seamlessly with the College Football Data (CFBD) API. Pretty sweet! 🎂

So just to reiterate: we needed clean school names devoid of school mascot references to correctly fetch game data from the CFBD API. To achieve this, we devised a function to filter out and discard mascot names from our selected teams, ensuring that the subsequent fetch request URL would only contain school names, allowing us to receive a proper, error-free response from the API.

In summary, the changes guarantee that our data retrieval process aligned with the API's expectations, which allows us to continue our journey down the sidelines. Alright, I promise that's enough corny football references for one day.

## The Play Review

Through iterative problem-solving and simple, effective adjustments to the way we are handling our data, I'm happy to say that we have eliminated the inaccurate filtering in our API fetch requests. For now. 🤞

Thanks for reading, I hope you enjoyed. Take care!

*fin* ᓚᘏᗢ
