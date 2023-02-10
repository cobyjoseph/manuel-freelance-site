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

<div class="flex flex-col gap-3 ">
	<div class="text-title flex justify-center px-2 ">
		<span>&#128202; </span>
		Frequently Asked Questions
	</div>

	<div class="text-thin flex justify-center">Subtitle about the FAQ section, if desired.</div>

	{#each FAQs as FAQ, index (FAQ.id)}
		<button class=" bg-medGray flex gap-2 max-w-[40rem] mx-4 p-2  text-left" on:click={toggleFAQ}>
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
				<div class="font-semibold">
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

<style>
	.text-title {
		font-size: clamp(1.4rem, 5vw, 1.9rem);
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
