var $products,
	$current_product = 'egan';

// List all the products here

$products = {
	quick : {
		name     : 'Quick',
		tag      : 'WordPress, Onepage',
		img      : 'http://demo.themexpert.com/images/quick.jpg',
		url      : 'http://www.themefisher.com/themes/quick-wp/',
		purchase : 'http://www.themexpert.com/wordpress-themes/quick'
	},
	agencia : {
		name     : 'Agencia',
		tag      : 'WordPress, Onepage',
		img      : 'http://demo.themexpert.com/images/agencia.jpg',
		url      : 'http://agencia.demo.themexpert.com/preview',
		purchase : 'http://www.themexpert.com/wordpress-themes/agencia'
	},
	lawxpert : {
		name     : 'Lawxpert',
		tag      : 'Joomla 3.x, Corporate, Law Firm',
		img      : 'http://demo.themexpert.com/images/lawxpert.jpg',
		url      : 'http://lawxpert.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/lawxpert'
	},
	egan : {
		name     : 'Egan',
		tag      : 'WordPress, News, Magazine',
		img      : 'http://demo.themexpert.com/images/egan.jpg',
		url      : 'http://egan.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/wordpress-themes/egan'
	},
	unity : {
		name     : 'Unity',
		tag      : 'Joomla 3.x,Joomla 2.5, Onepage',
		img      : 'http://demo.themexpert.com/images/unity.jpg',
		url      : 'http://unity.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/unity'
	},
	next : {
		name     : 'Next',
		tag      : 'Joomla 3.x,Joomla 2.5, News',
		img      : 'http://demo.themexpert.com/images/next.jpg',
		url      : 'http://next.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/next'
	},
	zmash : {
		name     : 'Zmash',
		tag      : 'Joomla 3.x,Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/zmash.jpg',
		url      : 'http://zmash.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/zmash'
	},
	spaghetti : {
		name     : 'Spaghetti',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/spaghetti.jpg',
		url      : 'http://spaghetti.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/spaghetti',
		tooltip  : '2 Homepage variations'
	},
	bizcorp : {
		name     : 'Bizcorp',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/bizcorp.jpg',
		url      : 'http://bizcorp.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/bizcorp',
		tooltip  : 'Onepage Business Template'
	},
	hostx : {
		name     : 'HostX',
		tag      : 'Joomla 3.x,Joomla 2.5,Hosting',
		img      : 'http://demo.themexpert.com/images/hostx.jpg',
		url      : 'http://hostx.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/hostx',
		tooltip  : 'Hosting Template'
	},
	'switch' : {
		name     : 'Switch',
		tag      : 'WordPress,OnePage',
		img      : 'http://demo.themexpert.com/images/switch.jpg',
		url      : 'http://switch.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/wordpress-themes/switch'
	},
	'event' : {
		name     : 'Event',
		tag      : 'Joomla 3.x,Joomla 2.5,Event',
		img      : 'http://demo.themexpert.com/images/event.jpg',
		url      : 'http://event.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/event',
		tooltip  : 'Event Template'
	},
	nefario : {
		name     : 'Nefario',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/nefario.jpg',
		url      : 'http://nefario.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/nefario',
		tooltip  : 'Corporate Business Template'
	},
	eduxpert : {
		name     : 'EduXpert',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/eduxpert.jpg',
		url      : 'http://eduxpert.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/eduxpert',
		tooltip  : 'Education Template'
	},
	sportz : {
		name     : 'Sportz',
		tag      : 'Joomla 3.x,Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/sportz.jpg',
		url      : 'http://sportz.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/sportz',
		tooltip  : 'News and Magazine Template'
	},
	zenithii : {
		name     : 'ZenithII',
		tag      : 'Joomla 3.x,Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/zenithii.jpg',
		url      : 'http://zenithii.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/zenithii',
		tooltip  : 'Business Template'
	},
	metronews : {
		name     : 'Metronews',
		tag      : 'Joomla 3.x,Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/metronews.jpg',
		url      : 'http://metronews.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/metronews',
		tooltip  : 'News Template'
	},
	appy : {
		name     : 'Appy',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/appy.jpg',
		url      : 'http://appy.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/appy',
		tooltip  : 'App Landing Page Template'
	},
	boost : {
		name     : 'Boost',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/boost.jpg',
		url      : 'http://boost.demo.themexpert.com/',
		purchase : 'http://www.themexpert.com/joomla-templates/boost',
		tooltip  : 'Ecommerce Template'
	},
	bolt : {
		name     : 'Bolt',
		tag      : 'Joomla 3.x,Joomla 2.5,Multipurpose',
		img      : 'http://demo.themexpert.com/images/bolt.jpg',
		url      : 'http://bolt.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/bolt',
		tooltip  : 'Business, Travel, Event Template'
	},
	optimus : {
		name     : 'Optimus',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/optimus.jpg',
		url      : 'http://optimus.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/optimus',
		tooltip  : 'Corporate Business Template'
	},
	gravityii : {
		name     : 'Gravityii',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/gravityii.jpg',
		url      : 'http://gravityii.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/gravityii',
		tooltip  : 'Ecommerce Template'
	},
	photon : {
		name     : 'Photon',
		tag      : 'Joomla 3.x,Joomla 2.5,App',
		img      : 'http://demo.themexpert.com/images/photon.jpg',
		url      : 'http://photon.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/photon',
		tooltip  : 'App Landing Page Template'
	},
	focus : {
		name     : 'Focus',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/focus.jpg',
		url      : 'http://focus.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/focus',
		tooltip  : 'Education and Social Template'
	},
	crunch : {
		name     : 'Crunch',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/crunch.jpg',
		url      : 'http://crunch.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/crunch',
		tooltip  : 'Business Template'
	},
	cohesion : {
		name     : 'Cohesion',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/cohesion.jpg',
		url      : 'http://cohesion.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/cohesion',
		tooltip  : 'Business Template'
	},
	zenith : {
		name     : 'Zenith',
		tag      : 'Joomla 3.x,Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/zenith.jpg',
		url      : 'http://zenith.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/zenith',
		tooltip  : 'Business Template'
	},
	delicious : {
		name     : 'Delicious',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/delicious.jpg',
		url      : 'http://delicious.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/delicious'
	},
	simplex : {
		name     : 'Simplex',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/simplex.jpg',
		url      : 'http://simplex.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/simplex',
	},
	extreme : {
		name     : 'Extreme',
		tag      : 'Joomla 3.x,Joomla 2.5,Gaming',
		img      : 'http://demo.themexpert.com/images/extreme.jpg',
		url      : 'http://extreme.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/extreme'
	},
	vibration : {
		name     : 'Vibration',
		tag      : 'Joomla 3.x,Joomla 2.5,Ecommerce',
		img      : 'http://demo.themexpert.com/images/vibration.jpg',
		url      : 'http://vibration.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/vibration'
	},
	maximus : {
		name     : 'Maximus',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/maximus.jpg',
		url      : 'http://maximus.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/maximus'
	},
	streamx : {
		name     : 'Streamx',
		tag      : 'Joomla 3.x,Joomla 2.5,Music',
		img      : 'http://demo.themexpert.com/images/streamx.jpg',
		url      : 'http://streamx.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/streamx'
	},
	crisp : {
		name     : 'Crisp',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/crisp.jpg',
		url      : 'http://crisp.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/crisp'
	},
	parallax : {
		name     : 'Parallax',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/parallax.jpg',
		url      : 'http://parallax.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/parallax'
	},
	matheno : {
		name     : 'Matheno',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/matheno.jpg',
		url      : 'http://matheno.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/matheno'
	},
	anonymous : {
		name     : 'Anonymous',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/anonymous.jpg',
		url      : 'http://anonymous.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/anonymous'
	},
	sanity : {
		name     : 'Sanity',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/sanity.jpg',
		url      : 'http://sanity.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/sanity'
	},
	'daily-edition' : {
		name     : 'Dailyedition',
		tag      : 'Joomla 3.x,Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/dailyedition.jpg',
		url      : 'http://dailyedition.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/dailyedition'
	},
	untitled : {
		name     : 'Untitled',
		tag      : 'Joomla 2.5,Blog',
		img      : 'http://demo.themexpert.com/images/untitled.jpg',
		url      : 'http://untitled.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/untitled'
	},
	cursor : {
		name     : 'Cursor',
		tag      : 'Joomla 3.x,Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/cursor.jpg',
		url      : 'http://cursor.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/cursor'
	},
	infinity : {
		name     : 'Infinity',
		tag      : 'Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/infinity.jpg',
		url      : 'http://infinity.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/infinity'
	},
	mainstream : {
		name     : 'Mainstream',
		tag      : 'Joomla 2.5,News',
		img      : 'http://demo.themexpert.com/images/mainstream.jpg',
		url      : 'http://mainstream.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/mainstream'
	},
	dispatch : {
		name     : 'Dispatch',
		tag      : 'Joomla 2.5,Business',
		img      : 'http://demo.themexpert.com/images/dispatch.jpg',
		url      : 'http://dispatch.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/dispatch'
	},
	freemium : {
		name     : 'Freemium',
		tag      : 'Joomla 2.5,Free',
		img      : 'http://demo.themexpert.com/images/freemium.jpg',
		url      : 'http://freemium.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/freemium'
	},
	finnix : {
		name     : 'Finnix',
		tag      : 'Joomla 3.x,Joomla 2.5,Education',
		img      : 'http://demo.themexpert.com/images/finnix.jpg',
		url      : 'http://finnix.demo.themexpert.com',
		purchase : 'http://www.themexpert.com/joomla-templates/finnix'
	},

};
