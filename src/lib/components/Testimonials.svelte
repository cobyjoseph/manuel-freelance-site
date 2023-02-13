<script lang="ts">
	import { testimonialsStore } from '$lib/stores/Testimonials';
	import { fade, fly, blur } from 'svelte/transition';
	import { sineIn, sineOut, quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';

	let testimonials;
	let postCount: Number;
	let visible;
	let stopCar = true;

	onMount(async () => {
		if (stopCar) {
			setInterval(autoScroll, 8000);
		} else if (!stopCar) {
			clearInterval(autoScroll);
		}
	});

	// have a variable that settimeout in addition to interval, and after every interval set back the initial state and reset

	testimonialsStore.subscribe((value) => {
		testimonials = value;
	});

	$: postCount = testimonials.length;

	$: direction = 'right';
	$: currentCard = 0;

	let autoScroll = () => {
		direction = 'right';
		currentCard = (currentCard + 1) % postCount;
	};

	function nextCard() {
		direction = 'right';
		currentCard = (currentCard + 1) % postCount;
		stopCar = false;
	}

	function prevCard() {
		direction = 'left';
		if (currentCard != 0) {
			currentCard = (currentCard - 1) % postCount;
		} else {
			currentCard = postCount - 1;
		}
	}
</script>

<div class="flex flex-col gap-3 px-4 max-w-[70rem]">
	<div class="text-title flex justify-center px-2 ">
		<span>&#128202; </span>
		Testimonials
	</div>

	<div class="text-thin flex justify-center">
		Subtitle about the testimonials section, if desired.
	</div>

	<div
		class="frostedBox relative z-10  flex min-h-[7rem] justify-between  gap-1 px-[0.1rem] mt-4    "
	>
		<!-- arrow left -->
		<button on:click={prevCard}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="relative z-50 h-[26px] w-[26px] justify-center stroke-blue-600 stroke-[3px] "
				fill="none"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<!-- this w-full makes this a central box that takes up the whole center, while the arrows are still pushed to either side with justify-between -->
		<!-- {#key testimonials[currentCard]} -->
		<div class="  pseudoQuote  flex w-full  overflow-hidden ">
			{#each [testimonials[currentCard]] as testimonial, index (testimonial.id)}
				<div
					in:fly={{
						delay: 0,
						duration: direction === 'right' ? 500 : 500,
						x: direction === 'right' ? 100 : -100,
						easing: sineIn
					}}
					animate:flip={{
						delay: 0,
						easing: quintOut
					}}
					class="flex flex-col items-center gap-[0.4rem] bg-opacity-30 p-2 "
				>
					<!-- this extra div around the image and name divs is so I can apply shirnk-0 to that whole container around these items, so they don't decrease their width based on the quote. then then the quote is a separate flex item that wraps itself. -->

					<!-- the negative ml below pushes it to the side of the box, which looks better, but can't be too big a neg ml or it will overlap with the left arrow. -->
					<div class=" ml-5 mt-3 flex min-w-[13.5rem] shrink-0 items-center gap-1 self-start   ">
						<img
							class="h-[50px] w-[50px]   shrink-0  rounded-full object-cover  "
							src="/testimonials/{testimonial.image}"
							alt="carousel images of students"
						/>
						<div
							class=" flex shrink-0 self-end font-Caveat text-sm font-semibold text-blue-600 lg:text-xl "
						>
							- {testimonial.name}
						</div>
					</div>

					<div class=" relative  mr-0  flex text-[1rem] italic px-2 py-4 ">
						{testimonial.quote}
					</div>
				</div>
			{/each}
		</div>
		<!-- {/key} -->

		<!-- arrow right -->
		<button on:click={nextCard}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="relative z-50 h-[26px] w-[26px] justify-center stroke-blue-600 stroke-[3px]"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
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

	.text-thin {
		font-size: clamp(0.8rem, 4vw, 1.2rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}
	.blurIn {
		opacity: 0.3;
		filter: blur(5px);
		transition: all 1s;
	}

	.visible {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}

	/* From https://css.glass */
	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}

	.pseudoQuote::after {
		content: '"';
		position: absolute;
		/* transform: translateY(1rem); */
		bottom: -3rem;
		right: 2rem;
		font-size: 4rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		z-index: -20;
	}

	.pseudoQuote::before {
		content: '"';
		position: absolute;
		top: 0.7rem;
		left: 1.4rem;
		font-size: 4rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		transform: scaleX(-1);
		z-index: -20;
	}
	/* .pseudoQuoteAfter::after {
			content: '"';
			position: absolute;
	
			bottom: -2.5rem;
			right: 2.2rem;
			font-size: 4rem;
	
			color: red;
			opacity: 0.4;
			font-family: IM Fell English;
			z-index: -20;
		} */

	/* MEDIA QUERIES BELOW ------------------------------------------- */
	/* 
	@media (min-width: 1024px) {
		.pseudoQuote::before {
			font-size: 5rem;
			top: -1rem;
			left: 13.5rem;
		}
	}

	@media (min-width: 1280px) {
		.pseudoQuote::before {
			font-size: 6rem;
			top: -1rem;
			left: 14rem;
		}
	}

	@media (min-width: 768px) {
		.pseudoQuote::after {
			font-size: 5rem;
			bottom: -3.5rem;
			right: 2rem;
		}
	}

	@media (min-width: 1280px) {
		.pseudoQuote::after {
			font-size: 6rem;
			bottom: -3.5rem;
			right: 2rem;
		}
	} */
</style>
