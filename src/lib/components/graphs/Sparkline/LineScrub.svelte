<script lang="ts">
	import { STROKE_WIDTH } from './types';

	interface Props {
		color: string;
		height: number;

		show: boolean;
		showMask: boolean;
        xPosition: number;
	}
	let { color, height, show, showMask, xPosition }: Props = $props();

	const STROKE_DASH_ARRAY = '2,4';
    const translateX = (x: number) => { return `transform: translateX(${x}px);`; }
</script>

<div id="container" class="anchor">
	<div class={`mask anchor ${showMask && show ? 'show-mask' : 'hide'}`} style={translateX(xPosition)}></div>

	<div class={`lineContainer ${show ? 'show' : 'hide'}`} style={translateX(xPosition)}>
		<svg class="lineContainer">
			<line
				x1="0"
				x2="0"
				y1="0"
				y2={height}
				stroke={color}
				stroke-width={STROKE_WIDTH}
				stroke-dasharray={STROKE_DASH_ARRAY}
			/>
		</svg>
	</div>
</div>

<style>
	.anchor {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.hide {
		opacity: 0;
	}

	.show-mask {
		opacity: 0.6;
	}

    .show {
        opacity: 1;
    }

	.lineContainer {
		height: 100%;
		width: 2;
	}

	/* This should go perfectly on top of the SVG */
	#container {
		position: absolute;
		pointer-events: none;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.mask {
		width: 100%;
		height: 100%;
		position: absolute;

		background-color: var(--background-color);
	}
</style>
