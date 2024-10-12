import { json } from '@sveltejs/kit';

import type { SongResponse } from '$lib/types/songs';

export async function GET() {
	const response = await fetch('http://localhost:8080/songs');
	const data: SongResponse = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return json(data);
}
