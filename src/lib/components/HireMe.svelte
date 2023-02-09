<div
	class="flex flex-col sm:grid sm:grid-cols-2 justify-center  widthClamp shadow-xl bg-white bg-opacity-70 rounded-xl max-w-[42rem]"
>
	<!-- LEFT COLUMM -->
	<div class="flex flex-col sm:grid  gap-6 p-8">
		<div class=" text-med">WHY HIRE ME?</div>
		<div class=" text-big">You know it's time to outsource content writing.</div>
		<div class=" text-thin">More text description about why to hire me goes here.</div>
	</div>

	<!-- RIGHT COLUMN -->
	<div class="p-3 flex justify-center items-center sm:grid">
		<img
			src="icons/cloud.png"
			alt="graphic of papers flying around"
			class="p-3 -mt-[2.5rem] sm:mt-0 picWidthClamp"
		/>
	</div>
</div>

<style>
	.text-med {
		font-size: clamp(1rem, 2vw, 1.3rem);
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
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}

	.widthClamp {
		width: clamp(10rem, 90vw, 55rem);
	}

	.picWidthClamp {
		width: clamp(20rem, 20vw, 45rem);
	}
</style>
