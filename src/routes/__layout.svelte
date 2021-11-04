<script>
	// Styles
	import '../app.postcss';

	// Components
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<SEO />

<main class="container px-2 mx-auto text-gray-50 font-poppins">
	<Navbar />

	<slot />
</main>
