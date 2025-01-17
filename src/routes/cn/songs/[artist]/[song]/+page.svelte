<!-- 歌曲 -->

<script lang="ts">
	import Song from "$lib/components/pages/Song.svelte";
	import type { SongResponse } from "$lib/types/songs";

	interface Props {
		data: SongResponse;
	}
	let { data }: Props = $props();
	let song = data.songs[0];
</script>

<Song song={song} />
