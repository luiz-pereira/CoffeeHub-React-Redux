This website will allow coffee buyers and producers to connect themselves for tasting and interacting.

the structure of the app is as follows.

* Nice Homepage with coffee pictures and a nice explanation
* navBar
* login page
* sign-up page
* page with coffee list (cards with pictures) - container
	- you can see a description and specs
	- when you click it opens another page (using router) with a video and tasting request
* buyer page - container
	- saved coffees - container
		- coffee cards/list
	- tastings requested - container
		- tastings list with status
* producer page - container
	- available coffees - container
		- coffee cards/list
	- tastings requested - container
		- tastings list with status

Tables needed:

* users - buyers and producers
* coffees
	- belongs to producers
	- has many buyers
	- has many tastings
* tastings
* savedcoffees jointable (buyers + coffees)

