<!--
  Standalone list component that covers the entire viewport.
  Includes a search bar, and pagination (soon)!

  Built to display songs, but should be extended to cover all use cases.
-->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { SONG_LIST } from '$lib/consts/i18n';
	import { parseLanguageFromPathname } from '$lib/consts/languages';
	import type { Song } from '$lib/types/songs';

	interface Props {
		songs: Song[];
	}
	let { songs }: Props = $props();
	
	const language = parseLanguageFromPathname($page.url.pathname);
	const i18n = SONG_LIST[language.apiPrefix];
</script>

<h1>{ i18n.SONG_LIST }</h1>
<div id="middle">
	<!-- TODO: Add a settings icon to the right + create a modal -->
	<div class="search-bar">
		<input type="text" class="search-input" placeholder={ i18n.SEARCH } />
		<!-- SVG stolen from YouTube's search bar -->
		<svg
			class="search-icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			focusable="false"
		>
			<path
				d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
			></path>
		</svg>
	</div>

	<div id="listContainer">
		<table>
			<thead>
				<tr>
					<th class="title-col">{ i18n.TITLE }</th>
					<th>{ i18n.ARTIST }</th>
				</tr>
			</thead>

			<tbody>
				{#each songs as song}
					<tr
						class="song"
						onclick={() => {
							goto(`/${language.apiPrefix}/songs/${song.artist}/${song.title}`);
						}}
					>
						<td>
							<a
								class="invisible"
								aria-label="song-link"
								href={`/${language.apiPrefix}/songs/${song.artist}/${song.title}`}
							></a>
							<span>{song.title}</span>
						</td>
						<td>{song.artist}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	h1 {
		margin: 0;
	}

	#middle {
		width: 100%;
	}

	.search-bar {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem 0;
	}

	.search-input {
		box-sizing: border-box;
		width: 100%;
		padding: 10px 20px 10px 40px;

		background-color: transparent;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;

		caret-color: rgb(241, 241, 241);
		color: rgba(255, 255, 255, 0.88);
	}

	.search-icon {
		position: absolute;
		left: 12px;
		top: 50%;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		stroke: var(--font-color);
	}

	/* Actual list CSS styles */
	#listContainer {
		padding: 0.5rem 0;
		padding-top: 0px;

		border-radius: 0.5rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th {
		padding: 0.375rem 0.625rem;
		text-align: left;
		font-weight: normal;
		color: var(--font-color-secondary);
	}

	.title-col {
		width: 50%;
	}

	td {
		height: 24px;
		vertical-align: middle;

		padding: 0.375rem 0.625rem;
	}

	tbody tr:nth-child(odd) {
		background-color: rgb(30, 30, 30);
	}

	.song:hover {
		cursor: pointer;
		background-color: rgb(45, 45, 45);
	}

	a {
		text-decoration: none;
		color: var(--font-color);
	}

	.invisible {
		display: none;
	}
</style>
