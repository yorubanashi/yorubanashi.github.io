<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { options } from '$lib/components/blog/page';
	import type { SongResponse } from '$lib/types/songs';

	interface Props {
		data: SongResponse;
	}
	let { data }: Props = $props();
	let song = data.songs[0];

	// "Initialize" options menu
	$options = 0;
	// Reset options menu state on page exit. TODO: Abstract to a generic "Options Menu" component
	beforeNavigate(() => {
		$options = NaN;
	});

	// Testing
	let isToggled = $state(false);
	const abc = () => {
		isToggled = !isToggled;
		console.log(isToggled);
	};
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
	<div id="options-content" class={$options == 1 ? 'show' : ''}>
		<div>Hello world!</div>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<tp-yt-paper-toggle-button
			onclick={abc}
			class="style-scope ytd-toggle-item-renderer"
			noink=""
			role="button"
			aria-pressed="true"
			tabindex="0"
			toggles=""
			aria-disabled="false"
			checked={isToggled ? true : null}
			active=""
			style="touch-action: pan-y;"
			><!--css-build:shady--><!--css-build:shady-->
			<div class="toggle-container style-scope tp-yt-paper-toggle-button">
				<div id="toggleBar" class="toggle-bar style-scope tp-yt-paper-toggle-button"></div>
				<div id="toggleButton" class="toggle-button style-scope tp-yt-paper-toggle-button"></div>
			</div>

			<div class="toggle-label style-scope tp-yt-paper-toggle-button"></div>
		</tp-yt-paper-toggle-button>
		<hr id="options-divider" />
	</div>
</div>

<style>
	.toggle-container.tp-yt-paper-toggle-button {
		display: inline-block;
		position: relative;
		width: 36px;
		height: 14px;
		margin: 4px 1px;
		padding: 0;
		border: 0;
		background: transparent;
	}

	.toggle-bar.tp-yt-paper-toggle-button {
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 8px;
		pointer-events: none;
		transition: background-color linear 0.5s;
		background-color: var(--paper-toggle-button-unchecked-bar-color, rgb(113, 113, 113));
		opacity: var(--paper-toggle-button-unchecked-bar-opacity, 0.4);
	}

	.toggle-button.tp-yt-paper-toggle-button {
		position: absolute;
		top: -3px;
		left: 0;
		right: auto;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		box-shadow: rgba(0, 0, 0, 0.6) 0 1px 5px 0 rgba(0, 0, 0, 0.6);
		transition:
			-webkit-transform linear 0.5s,
			background-color linear 0.5s;
		transition:
			transform linear 0.5s,
			background-color linear 0.5s;
		will-change: transform;
		background-color: var(--paper-toggle-button-unchecked-button-color, #fafafa);
	}

	tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-bar.tp-yt-paper-toggle-button {
		background-color: var(--paper-toggle-button-checked-bar-color, rgb(113, 113, 113));
		opacity: var(--paper-toggle-button-checked-bar-opacity, 0.5);
	}

	tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-button.tp-yt-paper-toggle-button {
		background-color: var(--paper-toggle-button-checked-button-color, rgb(62, 166, 255));
	}

	tp-yt-paper-toggle-button[checked] .toggle-button.tp-yt-paper-toggle-button {
		-webkit-transform: translate(16px, 0);
		transform: translate(16px, 0);
	}

	/* Main Content */

	#main-content {
		flex-grow: 1;
	}

	#title,
	#artist {
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

	.romanized,
	.english {
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
			width: 100%;
		}

		#options-divider {
			display: block;
			border-width: 0.5px;
			margin-bottom: 1em;
		}
	}
</style>
