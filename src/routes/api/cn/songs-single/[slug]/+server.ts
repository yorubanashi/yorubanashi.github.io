import { json } from '@sveltejs/kit';

import type { SongRequest, SongResponse } from '$lib/types/songs';

export async function GET({ params }) {
	const [artist, title] = params.slug.split('--');
	const request: SongRequest = { artist: artist, title: title };
	const response = await fetch('http://localhost:8080/songs', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(request)
	});
	const data: SongResponse = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return json(data);
}