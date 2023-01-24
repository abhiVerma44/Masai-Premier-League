# Masai Premier League

## Problem Statement:

- Masai is conducting a cricket tournament for all batches.
- You are given a task to schedule all the matches along with venue and date.
- Now you are supposed to create an App where you can schedule a match along with all required fields.
- Your application has a Navbar which contains 3 tabs (this is already in template no need to build)
- Home (index.html)
- Matches (matches.html)
- Favourites (favourites.html)
- On clicking on each tab, you should move to that corresponding page.


## Home (index.html)
- This page will consist of a form which has 2 input tags and 3 select tags.
- Match Number
- Team A (select tag)
- Team B (select tag)
- Date ( input type date)
- Venue (select tag)
- On clicking on form submit (form submit event) you should store match data in your local storage with key "schedule"

## Home

![ho](https://user-images.githubusercontent.com/103949784/214441212-b6f15f66-ae53-4027-b6cc-e5f6973bb8f9.PNG)


## Matches (matches.html)
- This page should display all matches data which is stored in your local database (local storage)
- Display this data in form of table (thead is already in place just append to tbody)
- Each row should have 5 columns
- Match Number
- Team A
- Team B
- Date
- Venue
- Favourites (not a button instead use normal text with color green)
- On clicking "Add as Favourites", store that particular favourites data in localStorage with key "favourites"

- You should also have a filter option
- filter by venue : When clicking on any venue you need to filter out all the matches corresponding to that venue.
## Matches

![match](https://user-images.githubusercontent.com/103949784/214441235-77b2d8a1-8775-48c9-9078-00dde78f2927.PNG)


## Favourites (favourites.html)
- This page should display all matches data which is stored in your local database
- Display this data in form of table (thead is already in place just append to tbody)
- Each row should have 5 columns
- Match Number
- Team A
- Team B
- Date
- Venue
- Delete
- On clicking "Delete", you should be able to delete that favourite item from DOM as well as from localStorage.
## Favourites

![fav](https://user-images.githubusercontent.com/103949784/214441255-1329c67a-8bc1-41be-ba6b-3130fc07bc09.PNG)

