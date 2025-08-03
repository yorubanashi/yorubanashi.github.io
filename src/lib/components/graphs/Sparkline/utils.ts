import { PADDING, StrokeColor, type Bounds, type Point } from './types';

export const calculateBounds = (points: Point[]): Bounds => {
	const xs: number[] = points.map((point: Point): number => {
		return point.x;
	});
	const ys: number[] = points.map((point: Point): number => {
		return point.y;
	});
	return {
		minX: Math.min(...xs),
		maxX: Math.max(...xs),
		minY: Math.min(...ys),
		maxY: Math.max(...ys),
		startY: points[0].y,
		endY: points[points.length - 1].y
	};
};

export const calculatePath = (points: Point[], width: number, height: number): string => {
	const bounds = calculateBounds(points);
	width -= PADDING * 2;
	height -= PADDING * 2;
	return points.reduce((path: string, point: Point, index: number): string => {
		const xRange = bounds.maxX - bounds.minX;
		const xRatio = (point.x - bounds.minX) / xRange;
		const x = xRatio * width;
		const yRange = bounds.maxY - bounds.minY;
		const yRatio = (point.y - bounds.minY) / yRange;
		const y = height - yRatio * height;

		if (index === 0) {
			return `M ${x + PADDING} ${y + PADDING}`;
		}
		return `${path} L ${x + PADDING} ${y + PADDING}`;
	}, '');
};

export const closePath = (path: string, width: number, height: number): string => {
	const brLine = `L${width},${height}`; // Line to the bottom-right corner
	const blLine = ` L0,${height}`; // Line to the bottom-left corner
	return path + `${brLine}${blLine}Z`; // Z closes out the path by implicitly going back to the first point
};

export const calculateColor = (points: Point[]): string => {
	const bounds = calculateBounds(points);
	return bounds.startY < bounds.endY ? StrokeColor.StockGreen : StrokeColor.StockRed;
};

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
