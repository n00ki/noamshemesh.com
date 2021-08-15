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
	import { setPageTitle, capitalizeText, timeAgoInWords } from '$lib/helpers';

	// Components
	import Seo from '$lib/components/Seo.svelte';

	let title = setPageTitle('Blog');
	export let posts;
</script>

<svelte:head>
	<Seo {title} />
</svelte:head>

{#each posts as post}
	{#if !post.draft}
		<a href="/blog/{post.slug}">
			<h1>{capitalizeText(post.title)}</h1>
			<h3>{timeAgoInWords(post.published_at)}</h3>
		</a>
	{/if}
{/each}
