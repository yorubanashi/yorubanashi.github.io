<script lang="ts">
	import { StrokeColor, type Bounds, type Point, type SVGSettings } from './types';

	interface Props {
		points: Point[];
	}
	let { points }: Props = $props();

    let width: number = $state(0);
    let height: number = $state(0);

    const calculateBounds = (points: Point[]): Bounds => {
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
    let bounds = $derived(calculateBounds(points));

    const calculatePath = (points: Point[], width: number, height: number): string => {
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
    const calculateSettings = (bounds: Bounds): SVGSettings => {
        return {
            color: (bounds.startY < bounds.endY ? StrokeColor.StockGreen : StrokeColor.StockRed),
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
        };
    };
    let settings = $derived(calculateSettings(bounds));
</script>

<div>
    <div id="sparkline" bind:clientWidth={width} bind:clientHeight={height}>
        <svg width="100%" height="100%">
            <path
                d={calculatePath(points, width, height)}
                stroke={settings.color}
                stroke-width={settings.strokeWidth}
                stroke-linecap={settings.strokeLinecap}
                stroke-linejoin={settings.strokeLinejoin}
                fill={settings.fill}
            />
        </svg>
    </div>
</div>

<style>
    #sparkline {
        height: 320px; 
    }
</style>
