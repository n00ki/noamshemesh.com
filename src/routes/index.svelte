<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />

<div class="flex flex-col-reverse px-2 lg:flex-row lg:justify-evenly 2xl:px-24">
	<section class="flex-1 flex flex-col text-center justify-center">
		<h1 class="text-4xl pb-3 font-extrabold sm:text-5xl sm:py-4">Hi, I'm Noam! &#x1F44B</h1>
		<p class="text-md leading-7 px-1 sm:leading-8 sm:px-0 md:text-lg">
			Music Producer, Web Developer & Life Enthusiast based in <strong>Israel</strong>. <br />
			Welcome to my little corner of the internet. <br />
			Checkout my recent
			<a href="/projects">
				<button
					class="rounded-md shadow-md px-1 md:p-1 tracking-normal text-transparent transition ease bg-gradient-to-br from-pink-600 to-pink-700 text-gray-100 md:hover:text-pink-600 md:hover:bg-gradient-to-b md:hover:from-gray-50 md:hover:to-gray-100"
					>Projects</button
				></a
			>
			, or simply say Hi :)
		</p>

		<span class="w-full py-8 inline-flex space-x-4 text-2xl justify-center">
			<a href="mailto:noams@hey.com">
				<i class="bi bi-envelope-fill transform ease-in-out duration-500 hover:text-pink-500" />
			</a>
			<a rel="external" href="https://www.linkedin.com/in/noam-shemesh-a57931186/" target="_blank">
				<i class="bi bi-linkedin transform ease-in-out duration-500 hover:text-pink-500" />
			</a>
			<a rel="external" href="https://twitter.com/noam__shemesh" target="_blank">
				<i class="bi bi-twitter transform ease-in-out duration-500 hover:text-pink-500" />
			</a>
			<a rel="external" href="https://www.facebook.com/noam.shemesh.526" target="_blank">
				<i class="bi bi-facebook transform ease-in-out duration-500 hover:text-pink-500" />
			</a>
			<a rel="external" href="https://www.instagram.com/noamshemesh/" target="_blank">
				<i class="bi bi-instagram transform ease-in-out duration-500 hover:text-pink-500" />
			</a>
			<a rel="external" href="https://github.com/n00ki" target="_blank">
				<i class="bi bi-github transform ease-in-out duration-500 hover:text-pink-500" />
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
