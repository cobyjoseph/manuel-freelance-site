<script>
</script>

<!-- This div contains all the content itself, and centers it within the parent flex-col wrapper -->
<section
	class="flex-col flex max-w-[69rem] gap-7 justify-center items-center px-5 text-primaryText  bg-opacity-30 relative"
>
	<div class="picSizeClamp rounded-full overflow-hidden ">
		<img src="headshots/main.jpeg" class=" w-100%  " alt="headshot of me" />
	</div>

	<!-- <div class=" justify-center items-start font-extrabold heroText text-center ">
		👋Some text about how great I am and what I do. Some text about how great I am and what I do.
		Bit more for spacing.
	</div> -->
	<div class=" justify-center items-start font-black heroText text-center ">
		<span class="">&#128075;</span>This is Manu. I help in-house marketing teams and agency owners
		with data-driven SEO content.
	</div>

	<div class="justify-center items-start font-light text-base text-center ">
		I'm Melissa, a designer with an affinity for working with creative clients on everything from
		brand identities and <span style="text-decoration: underline;"
			>packaging to custom installations and large-scale environmental graphics.</span
		><span>&#127758; </span>
	</div>

	<iframe
		class="aspect-video w-full max-w-4xl outline-blue-500 p-5"
		src="https://www.youtube.com/embed/gSPrxBP1Fnw"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>

	<!-- this is the wrapper for the two buttons, to put them side by side -->
	<div class="flex gap-10 flex-wrap justify-center ">
		<button
			class="flex justify-center bg-black text-white font-bold text-lg px-6 py-3 shadow-xl rounded-full"
			>Book a call</button
		>
		<button
			class="flex justify-center bg-lightGray text-darkGray  font-bold text-lg px-6 py-3 shadow rounded-full"
			>View work -></button
		>
	</div>
</section>

<style>
	.heroText {
		font-size: clamp(2.4rem, 4.9vw, 3.5rem);
		line-height: 1.08;
	}

	.picSizeClamp {
		width: clamp(8rem, 10vw, 14rem);
		height: clamp(8rem, 10vw, 14rem);
	}
</style>
