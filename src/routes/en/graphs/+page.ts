export async function load({ fetch }) {
	let response = await fetch(`/stock-abc.json`);
	let abcData = await response.json();
	if (abcData.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}

	response = await fetch(`/stock-xyz.json`);
	let xyzData = await response.json();
	if (abcData.error !== undefined) {
		throw new Error("Contact the developer. We shouldn't be here.");
	}
	return { stock: [abcData, xyzData] };
}
