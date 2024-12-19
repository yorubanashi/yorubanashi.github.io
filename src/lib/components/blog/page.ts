import { writable } from 'svelte/store';

// Toggle for an options menu on the page.
// NaN = no icon, 0 = hidden, 1 = show
export let options = writable<number>(NaN);
