export type Bounds = {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
	// For determining stroke color...
	startY: number;
	endY: number;
};

export type Point = {
	x: number;
	y: number;
};

export enum StrokeColor {
	// Stolen from Google's stock viewer
	// Would've preferred YouTube, but they don't have any graphs
	StockGreen = 'rgb(129, 201, 149)',
	StockRed = 'rgb(252, 139, 130)',
	// TODO: Should this be the same as font-color-secondary though...?
	StockGray = 'rgb(170, 170, 170)'
}

export type StringInterpolator = (str: string) => string;

export type PointsWithHeader = {
	points: Point[];
	stringFunc: StringInterpolator;
};
export const NewPointsWithHeader = (points: Point[], stringFunc: StringInterpolator) => {
	return { points, stringFunc };
};
