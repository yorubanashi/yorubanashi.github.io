import { StrokeColor, type Bounds, type Point } from '$lib/types/Sparkline';

export const calculateBounds = (points: Point[], paddingPercent: number): Bounds => {
	if (points.length === 0) {
		return { minX: NaN, maxX: NaN, minY: NaN, maxY: NaN, startY: NaN, endY: NaN };
	}

	const xs: number[] = points.map((point: Point): number => {
		return point.x;
	});
	const ys: number[] = points.map((point: Point): number => {
		return point.y;
	});
	const minY = Math.min(...ys);
	const maxY = Math.max(...ys);
	const padY = (maxY - minY) * paddingPercent;
	return {
		minX: Math.min(...xs),
		maxX: Math.max(...xs),
		minY: minY - padY,
		maxY: maxY + padY,
		startY: points[0].y,
		endY: points[points.length - 1].y
	};
};

export const calculateCoords = (
	point: Point,
	bounds: Bounds,
	width: number,
	height: number,
	padding: number
): Point => {
	// We only pad the width to allow the full line to show and not clip.
	// Height is already padded in the bound calculation.
	width -= padding * 2;

	const xRange = bounds.maxX - bounds.minX;
	const xRatio = (point.x - bounds.minX) / xRange;
	const x = xRatio * width;
	const yRange = bounds.maxY - bounds.minY;
	const yRatio = (point.y - bounds.minY) / yRange;
	const y = height - yRatio * height;
	return { x: x + padding, y };
};

export const calculatePath = (
	points: Point[],
	bounds: Bounds,
	width: number,
	height: number,
	padding: number
): string => {
	return points.reduce((path: string, point: Point, index: number): string => {
		const out = calculateCoords(point, bounds, width, height, padding);
		if (index === 0) {
			return `M ${out.x} ${out.y}`;
		}
		return `${path} L ${out.x} ${out.y}`;
	}, '');
};

export const closePath = (path: string, width: number, height: number): string => {
	const brLine = `L${width},${height}`; // Line to the bottom-right corner
	const blLine = ` L0,${height}`; // Line to the bottom-left corner
	return path + `${brLine}${blLine}Z`; // Z closes out the path by implicitly going back to the first point
};

// TODO: Make this generic between any two numbers for SparklineWithHeader
export const calculateColor = (bounds: Bounds): string => {
	return bounds.startY < bounds.endY ? StrokeColor.StockGreen : StrokeColor.StockRed;
};
