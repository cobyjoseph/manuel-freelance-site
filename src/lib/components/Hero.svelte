<script>
</script>

<!-- This div contains all the content itself, and centers it within the parent flex-col wrapper -->
<section
	class="flex-col flex max-w-[69rem] gap-7 justify-center items-center px-5 text-primaryText  bg-opacity-30 relative"
>
	<div class="picSizeClamp rounded-full overflow-hidden ">
		<!-- Image from Duarte Image / Flickr, 2017. Available at https://www.flickr.com/photos/duarteimage/34821411583/in/photolist-V43Qve-anw2NF-8nVdaK-V3VwiM-8nVeoF-V44x1x-A5xAjp-zM4vL1-zM7CHx-z7BrVG-zM6x4i-8nVcme-A3soeL-2k8jN-8NGXEP-A5xeZX-W61x2Z-8nYmrS-8nYmyq-8nVdGB-V1chkJ-V1cd61-8hNG7-VGm7GJ-WdWZ5W-W618np-8nYny1-V1cdj7-V1cfEu-anw2BZ-VGm7tY-VGkHUu-aJ4rmk-V44y6i-W2zhPu-8nVdY2-VGkSBQ-WdX15b-8nYmVj-V1cfr3-V43R74-Whw8kZ-V43Xz4-W2EnzG-aJ4qvt-W2F31Q-W2F12j-We45YN-8nV9T4-W6187e -->
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
