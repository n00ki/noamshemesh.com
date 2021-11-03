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

		console.log(projectsContent);

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

	export let projectsContent;
	export let projectsMeta;
</script>

<SEO pageTitle={'Projects'} />

<section class="grid grid-cols-3 gap-4">
	{#each projectsMeta as project}
		<a href={project.link} target="blank">
			<div
				id="project-card"
				class="h-80 bg-gray-50 text-gray-800 rounded-md shadow-lg overflow-hidden"
			>
				<img src={project.imageUrl} alt={project.title} class="h-1/2 w-full" />
				<h2>
					{project.title}
				</h2>
				<p>
					{project.description}
				</p>
			</div>
		</a>
	{/each}
</section>
