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

<main class="container flex flex-col min-h-screen px-2 mx-auto text-gray-50 font-poppins">
	<Navbar />

	<div class="flex-1 flex flex-col justify-center">
		<PageTransition refresh={$page.path}>
			<slot />
		</PageTransition>
	</div>
</main>
