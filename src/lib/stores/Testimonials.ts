import { writable } from 'svelte/store';

export const testimonialsStore = writable([
	{
		id: 1,
		name: 'Jim Collins, Comapny Name',
		image: 'Jim-Collins.jpg',
		// Photo by Emma Freeman Portraits / Flickr, 2006 https://www.flickr.com/photos/emmafreemanportraits/401938829/
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		id: 2,
		name: 'Emma Brown, Comapny Name',
		image: 'Emma-Brown.jpg',
		// Photo by Jenn Durfey / Flickr, 2012 https://www.flickr.com/photos/dottiemae/7770244716/
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		id: 3,
		name: 'Michael Smith, Comapny Name',
		image: 'Michael-Smith.jpg',
		// Photo by JON_CF / Flickr 2010 https://www.flickr.com/photos/ferronj/4957881435/
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
	},
	{
		id: 4,
		name: 'Maria Freeman, Comapny Name',
		image: 'Maria-Freeman.jpg',
		// Photo by stevetulk / Flickr, 2011 https://www.flickr.com/photos/epicsurfgt/5323017850/
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
]);
