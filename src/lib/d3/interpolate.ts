export const interpolateColor = (from: string, to: string, progress: number): string => {
	if (from === to) return to;
	if (progress <= 0) return from;
	if (progress >= 100) return to;

	interface RGBA {
		r: number;
		g: number;
		b: number;
		a: number;
	}
	const parseRGBA = (rgba: string): RGBA | undefined => {
		const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
		if (match) {
			return {
				r: parseInt(match[1]),
				g: parseInt(match[2]),
				b: parseInt(match[3]),
				a: match[4] ? parseFloat(match[4]) : 1
			};
		}
		return undefined;
	};
	const fromRGBA = parseRGBA(from);
	const toRGBA = parseRGBA(to);
	if (fromRGBA === undefined || toRGBA === undefined) return to;

	const r = Math.round(fromRGBA.r + (toRGBA.r - fromRGBA.r) * progress);
	const g = Math.round(fromRGBA.g + (toRGBA.g - fromRGBA.g) * progress);
	const b = Math.round(fromRGBA.b + (toRGBA.b - fromRGBA.b) * progress);
	const a = fromRGBA.a + (toRGBA.a - fromRGBA.a) * progress;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
};
