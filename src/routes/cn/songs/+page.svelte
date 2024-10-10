<!-- Songs -->
 
<script lang="ts">
	import SongList from "$lib/components/SongList.svelte";
  import type { SongResponse } from "$lib/types/songs";

  export let data: SongResponse;
</script>

<SongList songs={data.songs} />
