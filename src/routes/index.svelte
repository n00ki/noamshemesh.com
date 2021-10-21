<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO pageTitle="Home" />

<div class="flex flex-col-reverse px-2 lg:flex-row lg:justify-evenly 2xl:px-24">
	<section class="flex-1 flex flex-col text-center justify-center">
		<h1 class="text-4xl pb-3 font-extrabold sm:text-5xl sm:py-4">Hi, I'm Noam! &#x1F44B</h1>
		<p class="text-lg leading-6 px-1 sm:text-xl sm:leading-7 sm:px-0">
			Music Producer, Sound Engineer & Programming Enthusiast based in <strong>Tel Aviv</strong>.
			Welcome to my little corner of the internet.
		</p>

		<span class="w-full py-8 inline-flex space-x-4 text-2xl justify-center">
			<a href="mailto:noams@hey.com">
				<i class="bi bi-envelope-fill" />
			</a>
			<a href="https://twitter.com/shemeshno" target="_blank">
				<i class="bi bi-twitter" />
			</a>
			<a href="https://www.facebook.com/noam.shemesh.526" target="_blank">
				<i class="bi bi-facebook" />
			</a>
			<a href="https://www.instagram.com/noamshemesh/" target="_blank">
				<i class="bi bi-instagram" />
			</a>
			<a href="https://github.com/n00ki" target="_blank">
				<i class="bi bi-github" />
			</a>
		</span>
	</section>

	<section class="flex-1">
		<img
			class="p-16"
			src="https://res.cloudinary.com/nshemesh/image/upload/v1628635520/noamshemesh.com/noam.png"
			alt="noam"
		/>
	</section>
</div>
