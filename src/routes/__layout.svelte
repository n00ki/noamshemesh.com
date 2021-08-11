<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<main class="flex flex-col">
	<Navbar />
	<slot class="flex-1" />
</main>
