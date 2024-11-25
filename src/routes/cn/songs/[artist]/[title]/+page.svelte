<script lang="ts">
	import type { SongResponse } from '$lib/types/songs';

	export let data: SongResponse;
</script>

<div>{JSON.stringify(data)}</div>
