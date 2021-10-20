<script context="module">
	export async function load({ page }) {
		const posts = import.meta.globEager(`./posts/*.md`);
		const postsList = Object.values(posts);
		const postsMeta = postsList.map((post) => {
			return post.metadata;
		});

		return {
			props: {
				posts: postsMeta
			}
		};
	}
</script>

<script>
	// Helpers
	import { capitalizeText, timeAgoInWords } from '$lib/helpers';

	// Components
	import SEO from '$lib/components/SEO.svelte';

	export let posts;
</script>

<SEO pageTitle={'Blog'} />

{#each posts as post}
	{#if !post.draft}
		<a href="/blog/{post.slug}">
			<h1>{capitalizeText(post.title)}</h1>
			<h3>{timeAgoInWords(post.published_at)}</h3>
		</a>
	{/if}
{/each}
