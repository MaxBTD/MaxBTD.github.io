import { writable } from "svelte/store";
import { browser } from "$app/environment";


export const darkOn = (browser) ? writable(localStorage.getItem("darkOn") || 0 ) : writable(0);
darkOn.subscribe((value) => {
    if (browser) localStorage.setItem("darkOn", value);
});