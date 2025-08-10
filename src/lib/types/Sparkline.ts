export interface Bounds {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
	// For determining stroke color...
	startY: number;
	endY: number;
}

export interface Point {
	x: number;
	y: number;
}

export enum StrokeColor {
	// Stolen from Google's stock viewer
	// Would've preferred YouTube, but they don't have any graphs
	StockGreen = 'rgb(129, 201, 149)',
	StockRed = 'rgb(252, 139, 130)'
}
