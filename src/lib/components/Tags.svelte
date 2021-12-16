<script>
	// Props
	export let tags;

	let tagColorClass = function (tag) {
		switch (tag) {
			case 'ruby':
			case 'svelte':
				return 'bg-red-400';
				break;
			case 'rails':
				return 'bg-pink-400';
				break;
			case 'javascript':
			case 'sidekiq':
			case 'ableton live':
				return 'bg-yellow-400';
				break;
			case 'stimulus':
			case 'studio one':
				return 'bg-blue-400';
				break;
			case 'render':
			case 'supabase':
			case 'cloudinary':
				return 'bg-green-400';
				break;
			case 'heroku':
				return 'bg-indigo-400';
				break;
			case 'figma':
				return 'bg-purple-400';
				break;
			default:
				return 'bg-gray-200';
		}
	};
</script>

{#if tags}
	<p class="text-gray-900">
		{#each tags as tag}
			<span
				class="inline-flex items-center px-2 py-1 m-1 ml-0 rounded text-xs lowercase font-medium {tagColorClass(
					tag
				)}"
			>
				{tag}
			</span>
		{/each}
	</p>
{/if}
