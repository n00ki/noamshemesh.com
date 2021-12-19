<script context="module">
	export async function load({ page }) {
		const projects = import.meta.globEager(`../../lib/data/projects/*.md`);
		const projectsList = Object.values(projects);

		const projectsMeta = projectsList.map((project) => {
			return project.metadata;
		});

		return {
			props: {
				projectsMeta
			}
		};
	}
</script>

<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	// Props
	export let projectsMeta;
</script>

<SEO pageTitle={'Projects'} />

<section class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-4">
	{#each projectsMeta as project}
		<ProjectCard
			type={project.type}
			title={project.title}
			description={project.description}
			role={project.role}
			imageUrl={project.imageUrl}
			link={project.link}
			tags={project.tags}
		/>
	{/each}
</section>
