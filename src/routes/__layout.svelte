<script>
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<main class="flex flex-col container mx-auto font-poppins">
	<Navbar />

	<slot />
</main>
