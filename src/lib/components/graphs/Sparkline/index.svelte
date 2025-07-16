<script lang="ts">
	import type { Point } from './types';

	interface Props {
		points: Point[];
	}
	let { points }: Props = $props();
</script>

<div>
	{JSON.stringify(points)}
</div>
