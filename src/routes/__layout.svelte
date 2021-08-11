<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />
