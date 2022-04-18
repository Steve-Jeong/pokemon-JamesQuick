<script context='module'>
  export async function load({params}) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    return {props: {pokeman}}
  }
</script>

<script>
  export let pokeman;
  console.log(pokeman);
</script>

<div class='flex flex-col items-center'>
  <h1 class='text-4xl text-center my-8 uppercase'>{pokeman.name}</h1>
  <p>Type : <strong>{pokeman.types[0].type.name}</strong> 
    | Height: <strong>{pokeman.height}</strong> 
    | Weight: <strong>{pokeman.weight}</strong>
  </p>
  <img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>