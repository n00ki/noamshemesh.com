<script context="module">
	export async function load({ page }) {
		let { slug } = page.params;

		return {
			props: {
				slug
			}
		};
	}
</script>

<script>
	export let slug;
</script>

<h1>{slug}</h1>
