import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://tasty-islands.github.io',
  base: 'pangyo',
  integrations: [vue(), react(), svelte(), mdx(), UnoCSS()],
})