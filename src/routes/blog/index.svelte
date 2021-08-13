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
	export let posts;
</script>

{#each posts as post}
	<h1>{post.title}</h1>
{/each}
