import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/index-d88a766f.js";
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return { props: { pokeman } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  console.log(pokeman);
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<div class="${"flex flex-col items-center"}"><h1 class="${"text-4xl text-center my-8 uppercase"}">${escape(pokeman.name)}</h1>
  <p>Type : <strong>${escape(pokeman.types[0].type.name)}</strong> 
    | Height: <strong>${escape(pokeman.height)}</strong> 
    | Weight: <strong>${escape(pokeman.weight)}</strong></p>
  <img class="${"card-image"}"${add_attribute("src", pokeman.sprites["front_default"], 0)}${add_attribute("alt", pokeman.name, 0)}></div>`;
});
export { U5Bidu5D as default, load };
