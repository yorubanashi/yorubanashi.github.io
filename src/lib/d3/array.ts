const compare = (a: number, b: number): number => {
	return a < b ? -1 : (a > b ? 1 : 0);
}
const delta = (a: number, b: number): number => { return a - b; }

// Returns the insertion index for x in the sorted array to maintain sorted order.
export const bisectLeft = (arr: number[], x: number, lo = 0, hi = arr.length): number => {
	do {
		// >>> 1 is the same as integer division by 2
		const mid = (lo + hi) >>> 1;
		if (compare(arr[mid], x) < 0) lo = mid + 1;
		else hi = mid;
	} while (lo < hi);
	return lo;
}

// Returns the index closest to X in the given sorted array.
export const bisectCenter = (arr: number[], x: number, lo = 0, hi = arr.length): number => {
	const i = bisectLeft(arr, x, lo, hi - 1);
    return delta(arr[i - 1], x) > -delta(arr[i], x) ? i - 1 : i;
}

// Given a domain (min, max) a range (element length), and a position along the range:
// Calculate where within the domain the position belongs.
// e.g., [1000, 2000], 100, 25 -> 1250
export const invert = (min: number, max: number, width: number, pos: number): number => {
    return min + ((pos / width) * (max - min));
}
