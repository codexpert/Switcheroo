var $products,
	$current_product = 'spaghetti';

// List all the products here

$products = {

	spaghetti : {
		name     : 'Spaghetti',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/spaghetti.jpg',
		url      : 'http://spaghetti.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/spaghetti',
		tooltip  : '2 Homepage variations'
	},
	bizcorp : {
		name     : 'Bizcorp',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/bizcorp.jpg',
		url      : 'http://bizcorp.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/bizcorp',
		tooltip  : 'Onepage Business Template'
	},
	hostx : {
		name     : 'HostX',
		tag      : 'Joomla 3.x,Joomla 2.5,Hosting',
		img      : 'http://demo.themexpert.com/images/hostx.jpg',
		url      : 'http://hostx.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/hostx',
		tooltip  : 'Hosting Template'
	},
	eventx : {
		name     : 'Event',
		tag      : 'Joomla 3.x,Joomla 2.5,Event',
		img      : 'http://demo.themexpert.com/images/event.jpg',
		url      : 'http://event.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/event',
		tooltip  : 'Event Template'
	},
	nefario : {
		name     : 'Nefario',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/nefario.jpg',
		url      : 'http://nefario.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/nefario',
		tooltip  : 'Corporate Business Template'
	},
	eduxpert : {
		name     : 'EduXpert',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/eduxpert.jpg',
		url      : 'http://eduxpert.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/eduxpert',
		tooltip  : 'Education Template'
	},
	sportz : {
		name     : 'Sportz',
		tag      : 'Joomla 3.x,Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/sportz.jpg',
		url      : 'http://sportz.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/sportz',
		tooltip  : 'News and Magazine Template'
	},
	zenithii : {
		name     : 'ZenithII',
		tag      : 'Joomla 3.x,Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/zenithii.jpg',
		url      : 'http://zenithii.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/zenithii',
		tooltip  : 'Business Template'
	},
	metronews : {
		name     : 'Metronews',
		tag      : 'Joomla 3.x,Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/metronews.jpg',
		url      : 'http://metronews.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/metronews',
		tooltip  : 'News Template'
	},
	appy : {
		name     : 'Appy',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/appy.jpg',
		url      : 'http://appy.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/appy',
		tooltip  : 'App Landing Page Template'
	},
	boost : {
		name     : 'Boost',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/boost.jpg',
		url      : 'http://boost.demo.themexpert.com/',
		purchase : 'http://themexpert.com/joomla-templates/boost',
		tooltip  : 'Ecommerce Template'
	},
	bolt : {
		name     : 'Bolt',
		tag      : 'Joomla 3.x,Joomla 2.5,Multipurpose',
		img      : 'http://demo.themexpert.com/images/bolt.jpg',
		url      : 'http://bolt.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/bolt',
		tooltip  : 'Business, Travel, Event Template'
	},
	optimus : {
		name     : 'Optimus',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/optimus.jpg',
		url      : 'http://optimus.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/optimus',
		tooltip  : 'Corporate Business Template'
	},
	gravityii : {
		name     : 'Gravityii',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/gravityii.jpg',
		url      : 'http://gravityii.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/gravityii',
		tooltip  : 'Ecommerce Template'
	},
	photon : {
		name     : 'Photon',
		tag      : 'Joomla 3.x,Joomla 2.5,App',
		img      : 'http://demo.themexpert.com/images/photon.jpg',
		url      : 'http://photon.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/photon',
		tooltip  : 'App Landing Page Template'
	},
	focus : {
		name     : 'Focus',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/focus.jpg',
		url      : 'http://focus.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/focus',
		tooltip  : 'Education and Social Template'
	},
	crunch : {
		name     : 'Crunch',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/crunch.jpg',
		url      : 'http://crunch.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/crunch',
		tooltip  : 'Business Template'
	},
	cohesion : {
		name     : 'Cohesion',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/cohesion.jpg',
		url      : 'http://cohesion.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/cohesion',
		tooltip  : 'Business Template'
	},
	zenith : {
		name     : 'Zenith',
		tag      : 'Joomla 3.x,Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/zenith.jpg',
		url      : 'http://zenith.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/zenith',
		tooltip  : 'Business Template'
	},
	delicious : {
		name     : 'Delicious',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/delicious.jpg',
		url      : 'http://delicious.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/delicious',
		tooltip  : 'Ecommerce Template'
	},
	simplex : {
		name     : 'Simplex',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/simplex.jpg',
		url      : 'http://simplex.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/simplex',
		tooltip  : 'Business Template'
	},
	extreme : {
		name     : 'Extreme',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/extreme.jpg',
		url      : 'http://extreme.demo.themexpert.com',
		purchase : 'http://themexpert.com/joomla-templates/extreme',
		tooltip  : 'Gaming Template'
	},

};
