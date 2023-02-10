<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;

	console.log('blok in Page:', blok);
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6">
		{#each blok.body as item}
			<StoryblokComponent blok={item} />
		{/each}
	</div>
{/key}
