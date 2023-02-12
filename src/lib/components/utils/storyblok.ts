// import Feature from '$lib/components/Feature.svelte';
// import Grid from '$lib/components/Grid.svelte';
// import Page from '$lib/components/Page.svelte';
// import Teaser from '$lib/components/Teaser.svelte';

//--------------------------------------------------------
// COPIED CONTENT FROM HERE https://www.youtube.com/watch?v=WSLJIy-XYGg
//------------------------------------------------------------

import Feature from '../Feature.svelte';
import Grid from '../Grid.svelte';
import Teaser from '../Teaser.svelte';
import Page from '../Page.svelte';
import Articles from '../Articles.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

let storyblokApi;

export async function getStoryblokApiClient() {
	if (storyblokApi) {
		return storyblokApi;
	}
	storyblokInit({
		accessToken: 'ZuegYYxGQHylfVVw8eEGPQtt',
		use: [apiPlugin],
		apiOptions: { region: 'us' },
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			articles: Articles
		}
	});
	storyblokApi = await useStoryblokApi();

	return storyblokApi;
}

console.log('storyblockApi:', storyblokApi);
