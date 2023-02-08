<!-- This div groups together the title and the cards below it. If you don't group them, then the gap property set at +page.svelte level applies and seperates them -->
<div class="flex flex-col gap-6">
	<div class="text-big flex justify-center ">
		<span>&#128202; </span>
		Freelance Services
	</div>

	<!-- CARD CONTAINER -->
	<div class="flex gap-4">
		<!-- EACH CARD -->
		<div class=" flex flex-col p-5 bg-white bg-opacity-70 shadow-lg items-center gap-3 ">
			ICON HERE
			<div class="text-med">Service one</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<div class=" flex flex-col p-5 bg-white bg-opacity-70 shadow-lg items-center gap-3 ">
			ICON HERE
			<div class="text-med">Service one</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<div class=" flex flex-col p-5 bg-white bg-opacity-70 shadow-lg items-center gap-3">
			ICON HERE
			<div class="text-med">Service one</div>
			<div class="text-thin">Text describing service one, blah blah blah</div>
		</div>
		<!-- icon here -->
	</div>
</div>

<style>
	.text-med {
		font-size: clamp(0.8rem, 3vw, 1.5rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 800;
	}

	.text-big {
		font-size: clamp(1.35rem, 3vw, 1.9rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 700;
	}

	.text-thin {
		font-size: clamp(0.8rem, 3vw, 1.5rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 300;
	}
</style>
