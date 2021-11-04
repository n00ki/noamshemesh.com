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
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ProjectImage from '$lib/components/ProjectImage.svelte';

	export let projectsContent;
	export let projectsMeta;
</script>

<SEO pageTitle={'Projects'} />

<section class="grid px-2 md:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
	{#each projectsMeta as project}
		<a href={project.link} target="blank">
			<div
				class="h-full flex flex-col bg-gray-50 rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102"
			>
				<span class="absolute top-0 right-0 z-50 p-4 rounded-bl-md bg-pink-600 text-white">
					<ProjectIcon type={project.type} />
				</span>

				<div class="relative h-64">
					<ProjectImage imageUrl={project.imageUrl} imageAlt={project.title} />
				</div>

				<div class="flex-1 flex flex-col p-4">
					<h2 class="text-xl mb-2 tracking-wide text-gray-800">
						{project.title}
					</h2>
					<h4
						class="mb-2 text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-700 to-indigo-500"
					>
						{project.role}
					</h4>
					<p class="flex-1 mb-2 text-md text-gray-500">
						{project.description}
					</p>
					<Tags tags={project.tags} />
				</div>
			</div>
		</a>
	{/each}
</section>
