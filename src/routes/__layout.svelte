<script>
	import Meta from '$lib/components/Meta.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<Meta />

<main class="flex flex-col container mx-auto max-h-screen font-poppins">
	<Navbar />

	<slot />
</main>
