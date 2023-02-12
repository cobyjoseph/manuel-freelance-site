<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	console.log('data in +page.svelte:', data);

	console.log('storyblockcomponent in +page.svelte:', StoryblokComponent);

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div class="flex flex-col gap-12 mt-[5vh] justify-center relative font-Inter items-center  ">
	<div class="dotBackground  ">
		<div class=" flex flex-col gap-16 items-center " />

		<div class="text-big flex justify-center ">
			<span>&#128202; </span>
			Freelance Services
		</div>

		{#if data.story}
			<div class="text-3xl bg-red-400 ">test that data.story is true</div>

			<StoryblokComponent blok={data.story.content} />
		{/if}

		<!-- This div groups together the title and the cards below it. If you don't group them, then the gap property set at +page.svelte level applies and seperates them -->

		<!-- CARD CONTAINER -->
		<div class="flex flex-col sm:flex-row gap-4   text-center p-4  ">
			<!-- EACH CARD -->
			<div
				class="  flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4 "
			>
				<img src="icons/article.png" alt="graphic of website content" class=" -m-4 " />

				<div class="text-med ">Articles and blog posts</div>
				<div class="text-thin">Text describing service one, blah blah blah</div>
			</div>
			<div
				class=" flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4 "
			>
				<img src="icons/website-content.png" alt="graphic of website content" class="-m-4  " />
				<div class="text-med ">Website content</div>
				<div class="text-thin">Text describing service one, blah blah blah</div>
			</div>
			<div
				class=" flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4"
			>
				<img src="icons/keyword-research.png" alt="graphic of website on computer" class="-m-4 " />
				<div class="text-med ">Keyword research</div>
				<div class="text-thin">Text describing service one, blah blah blah</div>
			</div>
			<!-- icon here -->
		</div>
	</div>
</div>

<style>
	.text-med {
		font-size: clamp(1.3rem, 6vw, 1.5rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 800;
	}

	.text-big {
		font-size: clamp(1.5rem, 5vw, 1.9rem);
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

	.dotBackground {
		background-image: radial-gradient(#f1f1f1 10%, hsl(0, 0%, 97.5%) 0%);
		background-repeat: repeat;
		background-position: cover;
		position: relative;
		background-size: 40px 40px;
		height: 100%;
		width: 100%;
		z-index: -20;
	}
</style>
