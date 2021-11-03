<script>
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
				return 'bg-yellow-400';
				break;
			case 'stimulus':
			case 'supabase':
			case 'studio one':
				return 'bg-blue-400';
				break;
			case 'figma':
				return 'bg-green-400';
				break;
			case 'heroku':
				return 'bg-purple-400';
				break;
			default:
				return 'bg-gray-100';
		}
	};
</script>

<p class="text-gray-900">
	{#each tags as tag}
		<span
			class="inline-flex items-center px-2 py-1 m-1 ml-0 rounded text-xs font-medium {tagColorClass(
				tag
			)}"
		>
			{tag}
		</span>
	{/each}
</p>
