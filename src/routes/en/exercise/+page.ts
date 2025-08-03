export async function load({ fetch }) {
	const response = await fetch(`/data/running.json`);
	const data = await response.json();
	if (data.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return { running: data };
}
