import { writable } from 'svelte/store';

export const FAQStore = writable([
	{
		id: 1,
		question: 'Jim Collins',
		iconCode: 'Jim-Collins.jpg',
		// Photo by Emma Freeman Portraits / Flickr, 2006 https://www.flickr.com/photos/emmafreemanportraits/401938829/
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 2,
		question: 'Emma Brown',
		iconCode: 'Emma-Brown.jpg',
		// Photo by Jenn Durfey / Flickr, 2012 https://www.flickr.com/photos/dottiemae/7770244716/
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 3,
		question: 'Michael Smith',
		iconCode: 'Michael-Smith.jpg',
		// Photo by JON_CF / Flickr 2010 https://www.flickr.com/photos/ferronj/4957881435/
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 4,
		question: 'Maria Freeman',
		iconCode: 'Maria-Freeman.jpg',
		// Photo by stevetulk / Flickr, 2011 https://www.flickr.com/photos/epicsurfgt/5323017850/
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
]);
