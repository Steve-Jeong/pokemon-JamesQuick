import { c as create_ssr_component, v as validate_component } from "../../chunks/index-d88a766f.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-lg"}" href="${"/"}">Home</a>
  <a class="${"mx-4 text-lg"}" href="${"/about"}">About</a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"p-8 max-w-6xl mx-auto"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
export { _layout as default };
