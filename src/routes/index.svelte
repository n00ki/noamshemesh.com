<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />

<div class="flex flex-col-reverse px-2 lg:flex-row lg:justify-evenly 2xl:px-24">
	<section class="flex-1 flex flex-col text-center justify-center">
		<h1 class="text-4xl pb-3 font-extrabold sm:text-5xl sm:py-4">Hi, I'm Noam! &#x1F44B</h1>
		<p class="text-lg leading-6 px-1 md:text-xl sm:leading-7 sm:px-0">
			Music Producer, Web Developer & Life Enthusiast based in <strong>Tel Aviv</strong>. <br />
			Welcome to my little corner of the internet. <br />
			Checkout my recent
			<a href="/projects">
				<span
					class="py-0.5 px-1 rounded-md font-semibold tracking-normal shadow-xl bg-gradient-to-br from-pink-600 to-indigo-600"
					>Projects</span
				></a
			>
			, or simply say Hi :)
		</p>

		<span class="w-full py-8 inline-flex space-x-4 text-2xl justify-center">
			<a href="mailto:noams@hey.com">
				<i class="bi bi-envelope-fill transform ease-in-out duration-500 hover:text-pink-600" />
			</a>
			<a href="https://twitter.com/shemeshno" target="_blank">
				<i class="bi bi-twitter transform ease-in-out duration-500 hover:text-pink-600" />
			</a>
			<a href="https://www.facebook.com/noam.shemesh.526" target="_blank">
				<i class="bi bi-facebook transform ease-in-out duration-500 hover:text-pink-600" />
			</a>
			<a href="https://www.instagram.com/noamshemesh/" target="_blank">
				<i class="bi bi-instagram transform ease-in-out duration-500 hover:text-pink-600" />
			</a>
			<a href="https://github.com/n00ki" target="_blank">
				<i class="bi bi-github transform ease-in-out duration-500 hover:text-pink-600" />
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
