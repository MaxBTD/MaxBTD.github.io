import { writable } from "svelte/store";
import { browser } from "$app/environment";

export function mousePosition(init = {x: 0, y: 0}) {
	if (!browser) return writable(init);
	
	const store = writable(
		init,
		() => () => window.removeEventListener('mousemove', updatePosition)
	)
	
	function updatePosition(e) {
		store.set({ x: e.clientX, y: e.clientY });
	}
	
	window.addEventListener('mousemove', updatePosition)
	
	return {
		subscribe: store.subscribe
	}
}