// Static: This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
export const ssr = false

import type { SvelteWalkResponse } from "$lib/types/svelte";

export async function load({ fetch, url }) {
  // TODO: Reduce duplication here with Blog.svelte
  // Order translation toggle list items
  interface tl {
    prefix: string;
    name: string;
  }
  const tlList: tl[] = [
    { prefix: "/cn", name: "cn" },
    { prefix: "/jp", name: "jp" },
    { prefix: "/", name: "en" },
  ];
  const lang = ((): string => {
    for (let ele of tlList) {
      if (url.pathname.includes(ele.prefix)) {
        return ele.name;
      }
    }

    // Fallback to EN, I guess...
    return "en";
  })();

  const response = await fetch(`/api/svelte/${lang}`);
  const data: SvelteWalkResponse = await response.json();
  if (data.error !== undefined) {
    throw new Error("Contact the developer. We shouldn't be here.")
  }
  return data;
}
