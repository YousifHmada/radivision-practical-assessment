## Q1 ) List 5 user stories (use cases) for the website, each with a short description.
1. User can have one/multiple screens that he/she can watch on at the same time depending on his/her plan
2. User can access some features without having to sign up, i.e he/she can search movies, watch trailers, etc..
3. User can get localized view, i.e movies suggestions from his/her place 
4. User can get personalized view, i.e movies suggestions depending on movies he/she has watched previously or has been added to his/her watchlist. 
## Q2 ) List 5 features of the website.
* System can give localized movies recommendations.
    * Tasks :
      1. Check your db to make sure movies schema has a `countryOfOrigin` field.
      2. Case there was no such a field, then add it and find an online resource to fetch the missing data.
      3. Modify the recommendations api so that you can access user's location within the code.
      4. Use that code to fetch results from the db upon req.
   * Time required : 3 days (1 design, 1 coding, 1 integration & deployment).
* System can give personalized movies recommendations.
  * Tasks :
    1. Change the backend code to ensure that you store watchlist & search history of users in a way that you can search and aggregate them real quick.
    2. Makesure you categorize your movies (Horror, Comedy, Drama, etc..).
    3. Makesure you keep track of views & rates for those movies, that can be a great parameter when suggesting movies.
    4. Given all mentioned, you can use user most/frequently accessed (searched/watched) categozies and recommend movies within those categozies ordered by views/date maybe.
  * Time required : 5 days (2 design, 2 coding, 1 integration & deployment).
* System allows users to download movies.
* System can protect the younger audience.
* System allows users to set reminders on upcoming movies if desired.