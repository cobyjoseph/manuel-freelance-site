<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="bg-green-500 py-8 mb-6 text-5xl font-bold text-center">
	<!-- {blok.headline} -->
	{blok}
</div>

<div class="flex flex-col gap-3 ">
	<div class="text-title flex justify-center px-2">
		<span>&#128202; </span>
		Blog Space
	</div>

	<div class="text-thin flex justify-center">Subtitle about the blog section, if desired.</div>
</div>

<style>
	.text-title {
		font-size: clamp(1.4rem, 5vw, 1.9rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 700;
	}

	.text-thin {
		font-size: clamp(0.8rem, 4vw, 1.5rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}
</style>
