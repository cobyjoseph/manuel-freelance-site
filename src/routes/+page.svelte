<script lang="ts">
	import BlogSpace from '$lib/components/BlogSpace.svelte';
	import CaseStudies from '$lib/components/CaseStudies.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HireMe from '$lib/components/HireMe.svelte';
	import Services from '$lib/components/Services.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import Teaser from '$lib/components/Teaser.svelte';

	export let data;

	console.log('data in +page.svelte:', data);

	console.log('storyblockcomponent in +page.svelte:', StoryblokComponent);

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

{#if data.story}
	<div class="text-3xl bg-red-400 ">test that data.story is true</div>
	<StoryblokComponent blok={data.story.content} />
	<StoryblokComponent blok={data.story.content} />

{/if}

<div class="flex flex-col gap-10 mt-[17vh] justify-center relative font-Inter items-center  ">
	<div class="dotBackground mt-[-30rem] ">
		<div class="mt-[30rem] flex flex-col gap-12 items-center ">
			<Hero />
			<Clients />
		</div>
	</div>
	<Teaser blok={data.story.content} />
	<HireMe />
	<CaseStudies />
	<Services />
	<Testimonials />
	<BlogSpace blok={data.story.content} />
	<FAQ />

	<div class="dotBackgroundDark">
		<Footer />
	</div>
</div>

<style>
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

	.dotBackgroundDark {
		background-image: radial-gradient(#3e3b3b 5%, hsl(0, 0%, 0%) 0%);
		background-repeat: repeat;
		background-position: cover;
		position: relative;
		background-size: 30px 30px;
		height: 100%;
		width: 100%;
		z-index: -20;
	}
</style>
