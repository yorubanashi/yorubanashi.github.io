<script lang="ts">
	import type { SongResponse } from "$lib/types/songs";

  export let data: SongResponse;
</script>

<div>
  {#each data.songs as song}
    <a href={`/chinese/songs/${song.title}`}><div>
      {song.title}
    </div></a>
  {/each}
</div>
