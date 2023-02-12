<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;

	console.log('blok in Grid:', blok);
</script>

<div use:storyblokEditable={blok} class="">
	{#each blok.columns as blok}
		<div class="outline outline-blue-500">
			<StoryblokComponent {blok} />
		</div>
	{/each}
</div>
