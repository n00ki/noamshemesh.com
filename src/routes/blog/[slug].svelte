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
	import { capitalizeText } from '$lib/helpers';

	export let Post;
	export let postMeta;
</script>

<h1>{capitalizeText(postMeta.title)}</h1>

<Post />
