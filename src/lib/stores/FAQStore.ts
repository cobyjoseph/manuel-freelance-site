import { writable } from 'svelte/store';

export const FAQStore = writable([
	{
		id: 1,
		question: 'What is your work process like?',
		iconCode: 'Jim-Collins.jpg',

		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 2,
		question: 'What is the average turnaround time?',
		iconCode: '↩',

		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 3,
		question: 'How much do you charge?',
		iconCode: 'U+21A9',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 4,
		question: 'Do you offer any discounts?',
		iconCode: '',

		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 5,
		question: 'What do you need to get started?',
		iconCode: '&#128202;',

		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id: 6,
		question: 'Do you do keyword research?',
		iconCode: 'Maria-Freeman.jpg',

		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
]);
