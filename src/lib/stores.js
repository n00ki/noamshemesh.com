import { readable, writable } from 'svelte/store';

export let meta = writable({
	title: 'Noam Shemesh',
	description: 'Music Producer, Web Developer & Life Enthusiast based in Tel Aviv',
	imageUrl:
		'https://res.cloudinary.com/nshemesh/image/upload/v1636022984/noamshemesh.com/noamshemesh.png'
});

export let defaultTheme = readable('dark');
export let localStorageDataReady = writable(false);
