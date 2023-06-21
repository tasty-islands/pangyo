
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
const UnoCSS = __unconfig_stub;

// https://astro.build/config
const __unconfig_default =  defineConfig({
  site: 'https://tasty-islands.github.io',
  base: 'pangyo',
  integrations: [vue(), react(), svelte(), mdx(), UnoCSS()],
})

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;