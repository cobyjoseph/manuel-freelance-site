<!-- This div groups together the title and the cards below it. If you don't group them, then the gap property set at +page.svelte level applies and seperates them -->
<div class="flex flex-col gap-3 ">
	<div class="text-big flex justify-center ">
		<span>&#128202; </span>
		Freelance Services
	</div>

	<div class="text-thin flex justify-center">Subtitle about the freelance section, if desired.</div>

	<!-- CARD CONTAINER -->
	<div class="flex flex-col sm:flex-row gap-4   text-center p-4  ">
		<!-- EACH CARD -->
		<div
			class="  flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4 "
		>
			<img src="icons/article.png" alt="graphic of website content" class=" -m-5 " />

			<div class="text-med ">Articles and blog posts</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<div
			class=" flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4 "
		>
			<img src="icons/website-content.png" alt="graphic of website content" class="-m-5  " />
			<div class="text-med ">Website content</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<div
			class=" flex flex-col  items-center px-5 pb-7 pt-2  bg-white bg-opacity-70 shadow-lg gap-4"
		>
			<img src="icons/keyword-research.png" alt="graphic of website on computer" class="-m-5 " />
			<div class="text-med ">Keyword research</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<!-- icon here -->
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
</style>
