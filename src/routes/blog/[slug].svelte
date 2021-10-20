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
	export let title = capitalizeText(postMeta.title);
</script>

<svelte:head>
	<Meta pageTitle={title} />
</svelte:head>

<h1>{title}</h1>

<Post />
