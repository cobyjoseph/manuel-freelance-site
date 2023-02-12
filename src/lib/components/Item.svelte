<script>
	export let entry;
</script>

{#each entry[1] as item}
	<div class="text-xl ">
		{item.question}
		<button
			class=" w-full bg-medGray flex gap-2 max-w-[40rem]  p-2  text-left"
			on:click={toggleFAQ}
		>
			<div class="pl-2">
				{#if !showFAQ}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>
			<!-- <div>
      {FAQ.iconCode}
</div> -->

			<div class="flex flex-col gap-2">
				<div class="text-Q mt-auto mb-auto ">
					{item.question}
				</div>

				{#if showFAQ}
					<div>
						{item.answer}
					</div>
				{/if}
			</div>
		</button>
	</div>
{/each}
