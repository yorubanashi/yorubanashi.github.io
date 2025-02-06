import { json } from '@sveltejs/kit';

import type { SongRequest, SongResponse } from '$lib/types/songs';

export async function GET({ params }) {
	const request: SongRequest = { language: 'jp', artist: params.artist, title: params.song };
	const response = await fetch('http://localhost:8080/songs', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(request)
	});
	const data: SongResponse = await response.json();
	if (data.error !== undefined) {
		console.log(data.error);
		throw new Error("Contact the developer. We shouldn't be here.");
	}

	// TODO: I'm not sure adding cache-headers here work either.
	return json(data, {
		headers: {
			'Cache-Control': 'public, max-age=300'
		}
	});
}
