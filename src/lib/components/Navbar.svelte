<script>
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
</script>

<header class="flex my-4 justify-between items-center">
	<a class="flex-1" href="/">
		<h1 class="text-4xl font-bold">noam.</h1>
	</a>

	<a href="/projects" class="nav-btn">Projects</a>
	<a href="/contact" class="nav-btn">Contact</a>

	<div
		class="fixed bottom-4 left-4 rounded-full overflow-hidden text-gray-900 md:static md:rounded-none md:px-2"
	>
		<ThemeSelector />
	</div>
</header>
