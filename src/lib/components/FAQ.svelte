<script>
	import { FAQStore } from '$lib/stores/FAQStore';
	import { stringify } from 'postcss';

	let FAQs;
	let showFAQ = false;

	function toggleFAQ() {
		showFAQ = !showFAQ;
	}

	FAQStore.subscribe((value) => {
		FAQs = value;
	});
</script>

<div class="flex flex-col gap-3 bg-red-300 w-full items-center ">
	<div class="text-title flex justify-center px-2 ">
		<span>&#128202; </span>
		Frequently Asked Questions
	</div>

	<div class="text-thin flex justify-center">Subtitle about the FAQ section, if desired.</div>

	<div
		class="outline items-center outline-green-500 p-2 flex gap-2 flex-col w-[95vw] sm:w-[80wv] lg:w-[50vw] lg:max-w-[60rem] "
	>
		{#each FAQs as FAQ, index (FAQ.id)}
			<button
				class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
				on:click={toggleFAQ}
			>
				<div class="pl-2">
					{#if !showFAQ}
						<div class="flex items-start">+</div>
					{:else}
						<div class="flex items-start">-</div>
					{/if}
				</div>
				<!-- <div>
				{FAQ.iconCode}
			</div> -->

				<div class="flex flex-col gap-2">
					<div class="text-Q mt-auto mb-auto ">
						{FAQ.question}
					</div>

					{#if showFAQ}
						<div>
							{FAQ.answer}
						</div>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.text-title {
		font-size: clamp(1.4rem, 5vw, 1.9rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 700;
	}

	.text-Q {
		font-size: clamp(1rem, 1.4vw, 1.8rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 600;
	}

	.text-thin {
		font-size: clamp(0.8rem, 4vw, 1.2rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}

	/* .FAQClamp {
		width: clamp(10rem, 30rem, 54rem);
	} */
</style>
