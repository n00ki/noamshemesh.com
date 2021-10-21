<script>
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<SEO />

<main class="container mx-auto text-gray-50 font-poppins">
	<Navbar />
	<slot />
</main>
