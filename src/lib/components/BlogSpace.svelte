<script>
	import { each } from 'svelte/internal';

	export let blogArticles;
</script>

<div class="flex flex-col gap-3 ">
	<div class="text-title flex justify-center px-2">
		<span>&#128202; </span>
		Blog Space
	</div>

	<div class="text-thin flex justify-center">Subtitle about the blog section, if desired.</div>

	{#each blogArticles as i}
		<!-- CARD CONTAINER -->
		<div class="flex flex-col sm:flex-row gap-4    text-center p-4  ">
			<!-- EACH CARD -->
			<div
				class="  flex flex-col  items-center px-5 pb-7 pt-2    bg-opacity-70 shadow-lg gap-4 relative "
				style="background-image: url(blogs/{i.imgNum}.jpg);"
			>
				<div class="bg-red-500 w-full h-full z-40 relative" />

				<!-- <img src="blogs/{i.imgNum}.jpg" alt="graphic of website content" class="relative" /> -->

				<div class="text-med ">{i.title}</div>
				<div class="text-thin">{i.subtitle}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.image {
		background-position: center;
		background-position: cover;
		background-repeat: no-repeat;
	}

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

	.text-title {
		font-size: clamp(1.4rem, 5vw, 1.9rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 700;
	}

	.text-thin {
		font-size: clamp(0.8rem, 4vw, 1.2rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}
</style>
