<script lang="ts">
	import {
		FILL_PATTERN_ID,
		FILL_DOT_OPACITY,
		FILL_DOT_RADIUS,
		FILL_DOT_SPACING
	} from '$lib/consts/Sparkline';

	interface Props {
		color: string;
	}
	let { color }: Props = $props();
</script>

<pattern
	id={FILL_PATTERN_ID}
	patternUnits="userSpaceOnUse"
	width={FILL_DOT_SPACING}
	height={FILL_DOT_SPACING}
	x="0"
	y="0"
>
	<g>
		<rect fill="transparent" height={FILL_DOT_SPACING} width={FILL_DOT_SPACING}></rect>
		<circle fill={color} fill-opacity={FILL_DOT_OPACITY} cx="1" cy="1" r={FILL_DOT_RADIUS}></circle>
	</g>
</pattern>
