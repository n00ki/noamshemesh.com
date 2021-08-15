<script context="module">
	export async function load({ page }) {
		const { slug } = page.params;

		const Post = await import(`./posts/${slug}.md`);

		return {
			props: {
				Post: Post.default,
				postMeta: Post.metadata
			}
		};
	}
</script>

<script>
	// Helpers
	import { setPageTitle, capitalizeText } from '$lib/helpers';

	// Components
	import Seo from '$lib/components/Seo.svelte';

	export let Post;
	export let postMeta;

	let title = setPageTitle(postMeta.title);
</script>

<Seo {title} />

<h1>{capitalizeText(postMeta.title)}</h1>

<Post />
