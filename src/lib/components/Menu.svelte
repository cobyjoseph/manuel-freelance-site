<script>
	import { backIn, sineIn } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	let showMenu = false;

	function handleMenu() {
		showMenu = !showMenu;
	}

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div
	class=" flex justify-between p-3 text-lg font-bold font-Inter shadow-md bg-white bg-opacity-50 items-center"
>
	<div class="">
		<!-- <img class="w-7 sm:w-12" src="other/book-logo.svg" alt="rise tutoring logo" /> -->

		<div class=" ">Name here</div>
	</div>

	<div class="    ">
		<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
		<div class="hidden gap-14 lg:flex ">
			<a
				href={'#section2'}
				class=" customUnderline   font-semibold"
				on:click|preventDefault={scrollIntoView}>My services</a
			>

			<a
				href={'#section3'}
				class=" customUnderline  font-semibold"
				on:click|preventDefault={scrollIntoView}>About me</a
			>

			<a
				href={'#section4'}
				class=" customUnderline  font-semibold"
				on:click|preventDefault={scrollIntoView}>Contact</a
			>
		</div>

		<!-- THIS IS MENU ICON -->
		<div class="flex gap-8  lg:hidden ">
			{#if !showMenu}
				<button on:click={handleMenu} in:blur>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class=" flex h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			{/if}

			{#if showMenu}
				<div class="relative">
					<button on:click={handleMenu} in:blur>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="flex h-6 w-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<div
						class="frostedBox absolute top-7 right-0 z-[300] grid w-[14rem] grid-cols-1 gap-4 self-stretch p-6"
						in:blur={{ duration: 300, easing: sineIn }}
					>
						<a
							href={'#section2'}
							class=" underlineMenu   font-semibold  "
							on:click|preventDefault={scrollIntoView}>My services</a
						>

						<a
							href={'#section3'}
							class=" underlineMenu  font-semibold"
							on:click|preventDefault={scrollIntoView}
							>About me
						</a>

						<a
							href={'#section4'}
							class=" underlineMenu  font-semibold"
							on:click|preventDefault={scrollIntoView}
							>Contact
						</a>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
