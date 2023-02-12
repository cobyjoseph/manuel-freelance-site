<script>
	import { FAQStore } from '$lib/stores/FAQStore';
	import { stringify } from 'postcss';
	import Item from './Item.svelte';
	import { slide } from 'svelte/transition';

	let FAQs;
	let showFAQ1 = false;
	let showFAQ2 = false;
	let showFAQ3 = false;
	let showFAQ4 = false;
	let showFAQ5 = false;
	let showFAQ6 = false;

	function toggleFAQ1() {
		showFAQ1 = !showFAQ1;
	}

	function toggleFAQ2() {
		showFAQ2 = !showFAQ2;
	}

	function toggleFAQ3() {
		showFAQ3 = !showFAQ3;
	}

	function toggleFAQ4() {
		showFAQ4 = !showFAQ4;
	}

	function toggleFAQ5() {
		showFAQ5 = !showFAQ5;
	}

	function toggleFAQ6() {
		showFAQ6 = !showFAQ6;
	}

	// FAQStore.subscribe((value) => {
	// 	FAQs = value;
	// });
</script>

<div class="flex flex-col gap-3 w-full items-center ">
	<div class="text-title flex justify-center px-2 ">
		<span>&#128202; </span>
		Frequently Asked Questions
	</div>

	<div class="text-thin flex justify-center">Subtitle about the FAQ section, if desired.</div>

	<div
		class="items-center  p-2 flex gap-2 lg:gap-3 flex-col w-[95vw] sm:w-[80wv] lg:w-[50vw] lg:max-w-[60rem] "
	>
		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ1}
		>
			<div class="pl-2">
				{#if !showFAQ1}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1">What is your work process like?</div>

				{#if showFAQ1}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>

		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ2}
		>
			<div class="pl-2">
				{#if !showFAQ2}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1 ">What is your average turnaround time?</div>

				{#if showFAQ2}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>

		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ3}
		>
			<div class="pl-2">
				{#if !showFAQ3}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1 ">How much do you charge?</div>

				{#if showFAQ3}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>

		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ4}
		>
			<div class="pl-2">
				{#if !showFAQ4}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1 ">Do you offer any discounts?</div>

				{#if showFAQ4}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>

		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ5}
		>
			<div class="pl-2">
				{#if !showFAQ5}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1 ">What do you need to get started?</div>

				{#if showFAQ5}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>

		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ6}
		>
			<div class="pl-2">
				{#if !showFAQ6}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<div>&#128202;</div>

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-1 ">Do you do keyword research?</div>

				{#if showFAQ6}
					<div transition:slide={{ duration: 200 }}>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					</div>
				{/if}
			</div>
		</button>
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
		font-size: clamp(1rem, 1.4vw, 1.3rem);
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
