<script>
	// Components
	import Tags from '$lib/components/Tags.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ProjectImage from '$lib/components/ProjectImage.svelte';

	// Props
	export let type;
	export let title;
	export let description;
	export let role;
	export let imageUrl;
	export let link;
	export let tags;
</script>

<a href={link} target="blank">
	<div
		class="h-full flex flex-col bg-gray-50 rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102"
	>
		<span class="absolute top-0 right-0 z-50 p-4 rounded-bl-md bg-pink-600 text-white">
			<ProjectIcon {type} />
		</span>

		<div class="relative h-64">
			<ProjectImage {imageUrl} imageAlt={title} />
		</div>

		<div class="flex-1 flex flex-col p-4">
			<h2 class="text-xl mb-2 tracking-wide text-gray-800">
				{title}
			</h2>
			<h4
				class="mb-2 text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-700 to-indigo-500"
			>
				{role}
			</h4>
			<p class="flex-1 mb-2 text-md text-gray-500">
				{description}
			</p>
			<Tags {tags} />
		</div>
	</div>
</a>
