import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public'
		}),
		trailingSlash: 'always',
		paths: {
			base: isProd ? '/<GITHUB_REPO_NAME>' : ''
		}
	}
};

export default config;
