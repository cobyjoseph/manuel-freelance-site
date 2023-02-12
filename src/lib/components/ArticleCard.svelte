<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let articles;
	export let slug;
</script>

<a
	href="/{slug}"
	use:storyblokEditable={articles}
	class="w-full h-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
>
	<img
		src="{articles.image.filename}/m/600x0"
		alt={articles.image.alt}
		class="w-full h-48 xl:h-72 object-cover pointer-events-none"
	/>
	<div class="p-4">
		<h3 class="text-xl text-[#1d243d] font-bold mb-3">
			{articles.title}
		</h3>
		<div class="line-clamp-4">
			{articles.teaser}
		</div>
	</div>
</a>
