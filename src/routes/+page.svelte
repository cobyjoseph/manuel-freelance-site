<script lang="ts">
	import Clients from '$lib/components/Clients.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="flex flex-col gap-16 mt-[10vh] justify-center relative  ">
	<div class="dotBackground mt-[-50rem] ">
		<div class="mt-[50rem] flex flex-col gap-16">
			<Hero />
			<Clients />
		</div>
	</div>
</div>

<style>
	.dotBackgroundWrapper {
		position: relative;
		height: 100vh;
	}

	.dotBackground {
		background-image: radial-gradient(#f1f1f1 10%, #ffffff 0%);
		background-repeat: repeat;
		background-position: cover;
		position: relative;
		background-size: 50px 50px;
		height: 100%;
		width: 100%;
		z-index: -20;
	}
</style>
