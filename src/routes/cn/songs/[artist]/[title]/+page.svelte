<script lang="ts">
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}

	let { data }: Props = $props();
</script>

<div>{JSON.stringify(data)}</div>
