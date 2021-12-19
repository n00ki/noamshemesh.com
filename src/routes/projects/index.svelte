<script context="module">
	export async function load({ page }) {
		const filter = page.query.get('filter');

		const projects = import.meta.globEager(`../../lib/data/projects/*.md`);
		const projectsList = Object.values(projects);

		// const projectsContent = projectsList.map((project) => {
		// 	return project.default;
		// });

		const projectsMeta = projectsList.map((project) => {
			return project.metadata;
		});

		const filteredProjectsMeta = projectsMeta.filter((project) => {
			if (filter) {
				switch (filter) {
					case 'dev':
					case 'music':
					case 'non-curricular':
						return project.type === filter;
						break;
					default:
						return projectsMeta;
				}
			} else {
				return projectsMeta;
			}
		});

		return {
			props: {
				filteredProjectsMeta
			}
		};
	}
</script>

<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	// Props
	export let filteredProjectsMeta;
</script>

<SEO pageTitle={'Projects'} />

<section class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-4">
	{#each filteredProjectsMeta as project}
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
