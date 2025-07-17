export interface Point {
	x: number;
	y: number;
}

export interface Bounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    // For determining stroke color...
    startY: number;
    endY: number;
}

export enum StrokeColor {
    // Stolen from Google's stock viewer
    // Would've preferred YouTube, but they don't have any graphs
    StockGreen = 'rgb(129, 201, 149)',
    StockRed   = 'rgb(252, 139, 130)',
}

export interface SVGSettings {
    color: string;
    strokeWidth: number;
    strokeLinecap: "round" | "inherit" | "butt" | "square" | null | undefined;
    strokeLinejoin: "round" | "inherit" | "arcs" | "miter-clip" | "miter" | "bevel" | null | undefined;
    fill: string;
}
