<script lang="ts">
	import CaseStudies from '$lib/components/CaseStudies.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HireMe from '$lib/components/HireMe.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<div class="flex flex-col gap-12 mt-[17vh] justify-center relative font-Inter items-center  ">
	<div class="dotBackground mt-[-30rem] ">
		<div class="mt-[30rem] flex flex-col gap-16 items-center ">
			<Hero />
			<Clients />
		</div>
	</div>
	<HireMe />
	<CaseStudies />
	<Services />
</div>

<style>
	.dotBackground {
		background-image: radial-gradient(#f1f1f1 10%, hsl(0, 0%, 97.5%) 0%);
		background-repeat: repeat;
		background-position: cover;
		position: relative;
		background-size: 40px 40px;
		height: 100%;
		width: 100%;
		z-index: -20;
	}
</style>
