Name of Student: Ryan Walker

Name of Project: NowEat (Dinner and a Movie if stretch-goals met)

Project's Purpose or Goal: The goal of this application is to allow users to choose which restaurants they would mutually like to eat at.

List the absolute minimum features the project requires to meet this purpose or goal:
- A list of popular restaurants in Portland
- The ability to choose "Yes" or "No" for a given restaurant
- Compare choices between two or more users

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
- JavaScript 
- React
- Yelp/Restaurant API

If you finish developing the MVP with time to spare, what will you work on next?
- The ability for users to create accounts, log-in and log-out
- The ability for users to store choices in a database
- Incorporate AndChill (previous project for matching movie choices)
- Give the users the option to search for certain restaurants/movies

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
- The Movie DB API
- NoSQL
- JWT


////////Components\\\\\\\\\
Users:
* Login/Register/Logoff
* Page to see users' liked choices
* Page to display matches between two users

Restaurants:
* Set location
* Page that displays current restaurant
* Button for 'yes'
  * if 'yes': move selection to 'liked restaurants,' display next restaurant
    * if, when compared to other users choices, similar 'yes' for certain restaurant, alert with 'match'
  * if 'no': display next restaurant

State: 
* Current User
* Current Restaurant

//////////T's and P's\\\\\\\\\
-this application potentially only needs READ functionality. 
