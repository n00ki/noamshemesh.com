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

{#each projectsMeta as project}
	{project.title}
{/each}

{#each projectsContent as Project}
	<Project />
{/each}
