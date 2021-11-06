<script>
	// Styles
	import '../app.postcss';

	// Stores
	import { page } from '$app/stores';

	// Components
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<SEO />

<main class="container px-2 mx-auto text-gray-50 font-poppins">
	<Navbar />

	<PageTransition refresh={$page.path}>
		<slot />
	</PageTransition>
</main>
