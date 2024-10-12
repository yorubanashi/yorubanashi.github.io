import type { SongResponse } from '$lib/types/songs';

export async function load({ fetch }) {
	const response = await fetch('/api/cn/songs');
	const data: SongResponse = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return data;
}
