<script lang="ts">
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}

	let { data }: Props = $props();

	let song = data.songs[0];
</script>

<h1 id="title">{song.title}</h1>
<h2 id="artist">{song.artist}</h2>
<div id="lyrics">
{#each song.verses as verse}
	<div class="verse">	
	{#each verse.lines as line}
		<div class="line">
			<div class="primary">{line.pri}</div>
			<div class="romanized">{line.rom}</div>
			<div class="english">{line.eng}</div>
		</div>
	{/each}
	</div>
{/each}
</div>
<!-- Footer to add some padding to the bottom of the page to increase visibility.$derived
TODO: Should we implement this generically? -->
<div id="footer"></div>

<style>
	#title, #artist {
		margin: 0;
	}

	.verse {
		margin: 1em 0;
	}

	.line {
		margin: 0.25em 0;
	}

	.romanized {
		color: var(--font-color-secondary);
	}

	.romanized, .english {
		font-size: 0.875em;
	}

	#footer {
		height: 1em;
	}
</style>
