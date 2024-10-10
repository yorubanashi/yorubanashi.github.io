import { json } from '@sveltejs/kit';
import type { SvelteWalkRequest, SvelteWalkResponse } from "$lib/types/svelte";
import { fetchModule } from 'vite';

export async function GET({ params }) {
  const request: SvelteWalkRequest = { lang: params.slug };
  const response = await fetch("http://localhost:8080/svelte", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });
  const data: SvelteWalkResponse = await response.json();
  if (data.error !== undefined) {
    throw new Error("Contact the developer. We shouldn't be here.")
  }
  return json(data);
}
