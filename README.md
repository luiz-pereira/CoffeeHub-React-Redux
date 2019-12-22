This website will allow coffee buyers and producers to connect for tasting and interacting.

The site uses JWT (Json Webtoken) for authentication, alongside Rails 6.0 for API data requests.

To iniate the app, run 
- bundle install
- npm install inside /client
- run rake start (which uses Foreman to initiate both the web and the api servers)

the structure of the app is as follows.

* Homepage with coffee pictures and a nice explanation
* navBar, used for navigation/signin/singup
* login page
* sign-up page
* page with coffee list (cards with pictures) - container
	- you can see a description and specs
	- when you click it opens another page (using router) the option to save the coffee to your list and tasting request
* buyer page - container
	- saved coffees - container
		- coffee cards/list
	- tastings requested - container
		- tastings list with status
* (FUTURE IMPLEMENTATION) producer - admin functions, include new coffees, etc

* every interaction with the data is made through fetch requests to the API.

Tables needed:

* users - buyers and producers
* coffees
	- belongs to producers
	- has many buyers
	- has many tastings
* tastings
* savedcoffees jointable (buyers + coffees)

