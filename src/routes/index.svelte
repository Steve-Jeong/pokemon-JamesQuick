<script>
	import { pokemon } from '../stores/pokestore';
  import PokemanCard from '../components/pokemanCard.svelte'

	console.log($pokemon);
</script>

<svelte:head>
	<title>Pokedex</title> 
</svelte:head>
<h1 class='text-4xl text-center my-8 uppercase'>Svelte Kit Pokedex</h1>

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
  {#each $pokemon as pokeman}
    <PokemanCard pokeman={pokeman} />
  {/each}
</div>
