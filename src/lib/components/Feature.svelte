<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;

	console.log('blokInFeature:', blok);
</script>

<div use:storyblokEditable={blok} class="bg-blue-200">
	<div class="text-xl">
		{blok.name}
	</div>
</div>


