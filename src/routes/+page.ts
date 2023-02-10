import { getStoryblokApiClient } from '../lib/components/utils/storyblok';

export async function load() {
	const storyblokApi = await getStoryblokApiClient();
	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});

	return {
		story: dataStory.data.story
	};
}
