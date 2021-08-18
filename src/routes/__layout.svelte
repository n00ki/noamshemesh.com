<script>
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<Seo />
</svelte:head>

<main class="flex flex-col container mx-auto font-poppins">
	<Navbar />

	<slot />
</main>
