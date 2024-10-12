// Static: This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

import { LanguageList } from '$lib/consts/languages';
import type { SvelteWalkResponse } from '$lib/types/svelte';

export async function load({ fetch, url }) {
	const lang = ((): string => {
		for (let ele of LanguageList) {
			if (url.pathname.includes(ele.linkPrefix)) {
				return ele.apiPrefix;
			}
		}

		// Fallback to EN, I guess...
		return 'en';
	})();

	const response = await fetch(`/api/svelte/${lang}`);
	const data: SvelteWalkResponse = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return data;
}
