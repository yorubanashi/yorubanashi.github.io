import { StrokeColor, type Bounds, type Point, type SVGSettings } from './types';

export const calculateBounds = (points: Point[]): Bounds => {
    const xs: number[] = points.map((point: Point): number => { return point.x });
    const ys: number[] = points.map((point: Point): number => { return point.y });
    return {
        minX: Math.min(...xs),
        maxX: Math.max(...xs),
        minY: Math.min(...ys),
        maxY: Math.max(...ys),
        startY: points[0].y,
        endY: points[points.length - 1].y,
    };
}

export const calculatePath = (points: Point[], width: number, height: number): string => {
    const bounds = calculateBounds(points);
    return points.reduce((path: string, point: Point, index: number): string => {
        const xRange = bounds.maxX - bounds.minX;
        const xRatio = (point.x - bounds.minX) / xRange;
        const x = xRatio * width;
        const yRange = bounds.maxY - bounds.minY;
        const yRatio = (point.y - bounds.minY) / yRange;
        const y = height - (yRatio * height);

        if (index === 0) {
            return `M ${x} ${y}`
        }
        return `${path} L ${x} ${y}`;
    }, "");
};

// Some settings are hardcoded, which is fine for now. Wonder if there's a better place for them though.
export const calculateSettings = (points: Point[]): SVGSettings => {
    const bounds = calculateBounds(points);
    return {
        color: (bounds.startY < bounds.endY ? StrokeColor.StockGreen : StrokeColor.StockRed),
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
    };
};
