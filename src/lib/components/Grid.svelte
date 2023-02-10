<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;

	console.log('blok in Grid:', blok);
</script>

<div use:storyblokEditable={blok} class="bg-red-300">
	{#each blok.columns as blok}
		<div class="outline outline-green-500">
			<StoryblokComponent {blok} />
		</div>
	{/each}
</div>
