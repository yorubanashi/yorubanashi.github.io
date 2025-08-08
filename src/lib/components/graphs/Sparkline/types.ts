// Should these just be local to the Svelte file? Why import these?
export const FILL_PATTERN_ID = 'fill-pattern';
export const FILL_DOT_OPACITY = 0.2;
export const FILL_DOT_RADIUS = 1;
export const FILL_DOT_SPACING = 4;
export const PADDING = 2; // Chart padding to account for stroke width (i.e., lines being cut off and not fully round)
export const STROKE_WIDTH = 2;
export const TRANSITION_DURATION = 350; // in milliseconds

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
