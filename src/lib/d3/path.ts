import { StrokeColor, type Bounds, type Point } from '$lib/types/Sparkline';

export const calculateBounds = (points: Point[]): Bounds => {
	const xs: number[] = points.map((point: Point): number => {
		return point.x;
	});
	const ys: number[] = points.map((point: Point): number => {
		return point.y;
	});
	const minY = Math.min(...ys);
	const maxY = Math.max(...ys);
	const padY = (maxY - minY) * 0.05;
	return {
		minX: Math.min(...xs),
		maxX: Math.max(...xs),
		minY: minY - padY,
		maxY: maxY + padY,
		startY: points[0].y,
		endY: points[points.length - 1].y
	};
};

export const calculatePath = (
	points: Point[],
	bounds: Bounds,
	width: number,
	height: number,
	padding: number
): string => {
	// We only pad the width to allow the full line to show and not clip.
	// Height is already padded in the bound calculation.
	width -= padding * 2;
	return points.reduce((path: string, point: Point, index: number): string => {
		const xRange = bounds.maxX - bounds.minX;
		const xRatio = (point.x - bounds.minX) / xRange;
		const x = xRatio * width;
		const yRange = bounds.maxY - bounds.minY;
		const yRatio = (point.y - bounds.minY) / yRange;
		const y = height - yRatio * height;

		if (index === 0) {
			return `M ${x + padding} ${y}`;
		}
		return `${path} L ${x + padding} ${y}`;
	}, '');
};

export const closePath = (path: string, width: number, height: number): string => {
	const brLine = `L${width},${height}`; // Line to the bottom-right corner
	const blLine = ` L0,${height}`; // Line to the bottom-left corner
	return path + `${brLine}${blLine}Z`; // Z closes out the path by implicitly going back to the first point
};

export const calculateColor = (bounds: Bounds): string => {
	return bounds.startY < bounds.endY ? StrokeColor.StockGreen : StrokeColor.StockRed;
};
