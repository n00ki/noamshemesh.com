import { writable } from 'svelte/store';

export let meta = writable({
	title: 'Noam Shemesh',
	description: 'Music Producer, Sound Engineer & Tech Enthusiast based in Tel Aviv',
	imageUrl: 'https://res.cloudinary.com/nshemesh/image/upload/v1628635520/noamshemesh.com/noam.png'
});
