<script>
	import Meta from '$lib/components/Meta.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<Meta />
</svelte:head>

<main class="flex flex-col container mx-auto font-poppins">
	<Navbar />

	<slot />
</main>
