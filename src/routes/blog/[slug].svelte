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
	import { capitalizeText } from '$lib/helpers';

	// Components
	import Meta from '$lib/components/Meta.svelte';

	export let Post;
	export let postMeta;

	// $: title = setPageTitle(capitalizeText(postMeta.title));
</script>

<Meta pageTitle={postMeta.title} />

<h1>{capitalizeText(postMeta.title)}</h1>

<Post />
