<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { options } from "$lib/components/blog/page";
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}
	let { data }: Props = $props();
	let song = data.songs[0];

	// "Initialize" options menu
	$options = 0;
	// Reset options menu state on page exit. TODO: Abstract to a generic "Options Menu" component
	beforeNavigate(() => { $options = NaN; })
</script>

<div id="options-layout" class="flex">
	<div id="main-content">
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
	</div>
	<div id="options-content" class={ $options == 1 ? "show" : "" }>
		<div>Hello world!</div>
		<hr id="options-divider" />
	</div>
</div>

<style>
	/* Main Content */

	#main-content {
		flex-grow: 1;
	}

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

	/* Options Content */
	#options-content {
		width: 16rem;
	}

	#options-divider {
		display: none;
	}

	@media screen and (max-width: 56rem) {
		#options-layout {
			flex-direction: column-reverse;
		}

		#options-content {
			display: none;
		}

		#options-content.show {
			display: block;
			width: 100%
		}

		#options-divider {
			display: block;
			border-width: 0.5px;
			margin-bottom: 1em;
		}
	}
</style>
