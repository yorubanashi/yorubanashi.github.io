import type { SongResponse } from '$lib/types/songs';

export async function load({ fetch, params }) {
	// const response = await fetch(`/api/cn/songs-single/${params.artist}--${params.title}`);
	const response = await fetch(`/api/cn/artists/${params.artist}/songs/${params.song}`);
	const data: SongResponse = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return data;
}
