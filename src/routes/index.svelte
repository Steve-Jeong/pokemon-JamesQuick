<script>
import { each } from 'svelte/internal';

	import { pokemon } from '../stores/pokestore';
	console.log($pokemon);
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>
<h1>Svelte Kit Pokedex</h1>

{#each $pokemon as pokeman}
<p>
  {pokeman.name}
</p>
{/each}
