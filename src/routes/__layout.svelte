<script>
	// Utils
	import { onMount } from 'svelte';

	// Styles
	import '../app.css';

	// Stores
	import { page } from '$app/stores';
	import { localStorageDataReady } from '$lib/stores';

	// Components
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<SEO />

<div
	id="wrapper"
	class="min-h-screen bg-amber-100 transition-all duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50 {$localStorageDataReady
		? 'opacity-100'
		: 'opacity-0'}"
>
	<main class="container flex flex-col min-h-screen px-2 mx-auto font-poppins">
		<Navbar />

		<div class="flex-1 flex flex-col justify-center">
			<PageTransition refresh={$page.url.pathname}>
				<slot />
			</PageTransition>
		</div>
	</main>
</div>
