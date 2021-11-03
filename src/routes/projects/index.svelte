<script context="module">
	export async function load({ page }) {
		const projects = import.meta.globEager(`../../lib/data/projects/*.md`);
		const projectsList = Object.values(projects);

		const projectsContent = projectsList.map((project) => {
			return project.default;
		});

		const projectsMeta = projectsList.map((project) => {
			return project.metadata;
		});

		return {
			props: {
				projectsContent,
				projectsMeta
			}
		};
	}
</script>

<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
	import Tags from '$lib/components/Tags.svelte';

	export let projectsContent;
	export let projectsMeta;
</script>

<SEO pageTitle={'Projects'} />

<section class="grid grid-cols-4 gap-4">
	{#each projectsMeta as project}
		<a href={project.link} target="blank">
			<div
				id="project-card"
				class="bg-gray-50 rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102"
			>
				<span class="absolute top-0 right-0 p-4 bg-pink-600 text-white rounded-bl-md">
					{#if project.type == 'dev'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else if project.type == 'music'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
							/>
						</svg>
					{/if}
				</span>
				<img src={project.imageUrl} alt={project.title} class="" />
				<div class="p-4">
					<h2 class="text-xl mb-2 text-gray-800">
						{project.title}
					</h2>
					<p class="mb-2 text-gray-500">
						{project.description}
					</p>
					<Tags tags={project.tags} />
				</div>
			</div>
		</a>
	{/each}
</section>
