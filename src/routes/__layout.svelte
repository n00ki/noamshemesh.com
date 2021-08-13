<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<!-- head content -->
</svelte:head>

<main class="flex flex-col container mx-auto font-poppins">
	<Navbar />

	<slot />
</main>
