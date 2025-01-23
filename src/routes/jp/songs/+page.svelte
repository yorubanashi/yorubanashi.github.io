<!-- 楽曲リスト -->

<script lang="ts">
	import SongList from '$lib/components/pages/SongList.svelte';
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}

	let { data }: Props = $props();
</script>

<SongList songs={data.songs} />
