# Project 2: Restaurant Website

### Description

You've been asked to design a website for a new restaurant opening at 348 E. Main St., Lexington, KY. The owners are busy working on their recipes and haven't picked a name yet, so they've asked you to suggest one and use it in your design.

The owners are still working on their recipes. They've populated an API with possible choices. You are to use the API to generate a sample menu to add to your website. The API's URL is:[https://entree-f18.herokuapp.com/](https://entree-f18.herokuapp.com/).

### Website Content

The website needs to include at least:
- The restaurant's name (give it a good one!)
- The restaurant's address
- The restaurant's hours of operation:
	* Wednesday through Saturday, dinner only: 5pm - 10pm
	* Sunday, brunch and dinner: 11am - 8pm
- The restaurant's menu 
  - Must include at *least four* sections for unique meal type (appetizers, main course, sides, breakfast before 5am, etc)
    - each meal type must include *at least* eight (8) entries per type of meal (bagel and lox, plate of pancakes, omelette, etc)
    - since the api generates random foods, you do not need to sort the foods, as long as you are display them in their unique sections (imagine this restaurant exists in a parallel universe where people eat whatever, whenever)
  - Each Menu Section must be viewable separately in an [organism](https://patternlab.io) (for example, a bootstrap [accordion](https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example) or [nav](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior))
  - Each menu item must be an [molecule](https://patternlab.io) (for example, using a bootstrap card with a picture of the meal, as well as the name, and the price, etc)

### Objectives

To complete the assignment, you must complete the following:
###### Setup:
1. Fork repo `project2-js-restaurant-website`
2. Locally, navigate to your `Sites` folder in the terminal
3. `git clone` + `your-repo-name` into your Sites folder
4. Create a `dev` branch to commit your code to
5. Create necessary files for application
6. Import necessary css/js files (Bootstrap)

###### Optional Setup for eslint
1. in your repo top directory, 
2. `npm init`
3. `eslint --init`
4. add the following line to your `.gitignore`
   1. `node_modules/`

###### Develop:
1. Create a development branch
2. Add content to your website
3. View changes locally with MAMP (localhost)
4. Save often, and commit to your development branch when important changes (when you complete a story) happen
###### Deploy:
1. Create Heroku App with existing repo `heroku git\:remote -a yourproject2`
2. Push your code to Github remote
3. Push your code to Heroku remote
4. View your website on your laptop and phone
5. Post links to your Github repo and Heroku application to the [projects Slack channel](https://bootcamp-s19.slack.com/messages/CGAUZ4SA0/).

### Application file structure

Organize your files in the web application pattern we've used in class.

```
your-repo/
    web/
        index.html
        ...         - any additional .html files
        css/
            style.css
            ...     - any additional .html files
        js/
            main.js
            ...     - any additional .html files
        img/
            ...     - any images
        ...     -any other folders required for your site
    ...
    - any additional files required for git or heroku
```

### Requirements

1. Website must be responsive (follow proper bootstrap best practices, especially for importing your own css and js [no need to reinvent the wheel] )
2. Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Repo](https://github.com/bootcamp-s19/Resources#resources).
3. Add info to your projects README.md following the [README.md Best Practices](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).

### Remember to commit often and push to dev branches!

Your repo should be public so that others can see your code and comment on it.

### Remember to deploy to Heroku!

You will need to include a Procfile so Heroku knows how to start your server.

### If you finish early...

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Each time you access the API, you get a different menu. Save the results in local storage so that every time your website is accessed, the user gets the same menu. (Different users will see different menus; that's okay for now.)
3. Make each menu type (appetizers, main course, etc ) be the correct foods instead of random
4. Include a different menu for each day of the week that the restaurant is open.
5. Embed a Google Map showing the location of the restaurant.
6. Parse the results of the API call to show a list of sides available for substitution (either in addition to or instead of listing sides with each entree).
7. Add links and resources from this week to the [Class Resources Repo](https://github.com/bootcamp-s19/Resources#resources) by forking the repo and then initiating a pull request with your additions to the .md file.

Have fun!

**If you get stuck...**
- [Class Resources Repo](https://github.com/bootcamp-s19/Resources#resources)
- Ask. :-)

**Additional Resouces**
- [Pull Requests](https://stackoverflow.com/questions/21657430/why-is-a-git-pull-request-not-called-a-push-request)

For more information about using PHP on Heroku, see these Dev Center articles:

- [Getting Started with PHP on Heroku](https://devcenter.heroku.com/articles/getting-started-with-php)
- [PHP on Heroku](https://devcenter.heroku.com/categories/php)
- [API call / timeout visualization](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)