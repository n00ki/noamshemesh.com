import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true,
			sourceMap: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
