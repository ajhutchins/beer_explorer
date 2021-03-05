# The North Shore Beer Explorer

Visit the Website Here: https://thawing-spire-75376.herokuapp.com/beer_explorer

<strong>The North Shore Beer Explorer</strong> is a website designed for people living, or traveling, to the Boston area.<br> Just north of Boston lies the "North Shore," which has sprung up a plethora of breweries over the recent years. We have listed a few of our favorites on this website and made it possible for users to view each brewery, our favorite libations from each, edit the breweries, or delete them altogether. Ultimately, we hope to be a list of sorts for users to plan their brewery adventure and keep track of their favorite beers & breweries visited.

<h4>Technologies Used</h4>
<li>Languages: HTML5, CSS3, JavaScript</li>
<li>Databases & Libraries: MongoDB, Mongoose</li>
<li>Packages: ejs, express, methodOverride</li>
<li>VS Code</li>

<h4>Wireframing:</h4>

[embed](https://github.com/ajhutchins/beer_explorer/blob/main/NS_Beer_Explorer_Outline.pdf)[/embed]

[embed](https://github.com/ajhutchins/beer_explorer/blob/main/NS_Beer_Explorer_Untappd.pdf)[/embed]

<h4>Home Page:</h4>
This is where we list the original breweries from our seed information.<br>
<em>(I am mostly happy with how this looks, but would like to play around to get the list items in a 3x4 table instead of a straight column. However, the current method allows for easier readability on smaller screens).</em>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.18.44%20AM.png)


<h4>Show Page:</h4>
This is where we list the specific information to the one brewery the user clicks on.<br>
<em>(I am happy with this page, but would like to add more information that would be useful to the user (brewery website, hours, etc). I would also like to get the APIs for Untappd and google maps applied. That way the rating is always up to date, and there's a clickable map).</em>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.19.24%20AM.png)


<h4>Edit Page:</h4>
This is where we allow the user to edit the specific information to the one brewery the user clicks on.<br>
<em>(I am happy with this page, but would like to add a way for the site to populate a stock image if the image link they entered isn't found. That way there will still be some picture associated, instead of a small dot).</em>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.19.35%20AM.png)


<h4>Add New Brewery Page:</h4>
This is where we allow the user to add a new brewery.<br>
<em>(I am happy with this page, but would like to add a way for the site to populate a stock image if the image link they entered isn't found. That way there will still be some picture associated, instead of a small dot).</em>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.19.57%20AM.png)

<h4>Seeding our Original Breweries:</h4>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.20.27%20AM.png)

<h4>7 Routes to Operate the Functionality on the Pages:</h4>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.20.42%20AM.png)
![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.20.50%20AM.png)

<h4>server.js File:</h4>

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.21.10%20AM.png)

![alt text](https://github.com/ajhutchins/beer_explorer/blob/main/Screen%20Shot%202021-03-04%20at%2010.21.21%20AM.png)

Overall, I am very happy with what I was able to do. However, there are a lot of other places I would like to bring the functionality of this website:<br>
1. Log-In / Sign-Up page - this way, the user can have a specific list to their preferences after logging in.
2. APIs for Untappd and Google Maps - this way, the user has more up-to-date information and exact map locations.
3. Update the CSS so the visual is a little more appealing.
