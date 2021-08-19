<script>
	export let title = 'Noam Shemesh';
	export let description = 'Music Producer, Sound Engineer & Tech Enthusiast based in Tel Aviv';
	export let imageUrl =
		'https://res.cloudinary.com/nshemesh/image/upload/v1628635520/noamshemesh.com/noam.png';
</script>

<!-- Primary tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />
<meta name="image" content={imageUrl} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content={description} />
<meta property="og:image" content={imageUrl} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://noamshemesh.com/" />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={imageUrl} />
