<script lang="ts">
	interface Props {
		id: string;

		color: string;
		opacity: number;
		radius: number;
		spacing: number;
	}
	let { id, color, opacity, radius, spacing }: Props = $props();
</script>

<pattern {id} patternUnits="userSpaceOnUse" width={spacing} height={spacing} x="0" y="0">
	<g>
		<rect fill="transparent" height={spacing} width={spacing}></rect>
		<circle fill={color} fill-opacity={opacity} cx="1" cy="1" r={radius}></circle>
	</g>
</pattern>
