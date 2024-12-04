<!-- 歌曲 -->

<script lang="ts">
	import SongList from '$lib/components/SongList.svelte';
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}

	let { data }: Props = $props();
</script>

<SongList songs={data.songs} />
