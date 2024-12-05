<script lang="ts">
	interface Props {
		showMenu: boolean;
		pageTitle: string;
		toggleMenu: () => void;
		children?: import('svelte').Snippet;
	}

	let { showMenu = $bindable(), pageTitle, toggleMenu, children }: Props = $props();
</script>

<div id="page" class={showMenu ? 'opaque' : ''}>
	<header id="page-header">
		<div class="left">
			<button id="burger-button" aria-label="menu-toggle" onclick={toggleMenu}>
				<svg id="burger-icon" viewBox="0 0 24 24">
					<use href="/menu.svg#menu-one" />
					<use href="/menu.svg#menu-two" />
					<use href="/menu.svg#menu-three" />
				</svg>
			</button>
		</div>
		<div class="center">{pageTitle}</div>
		<div class="right"></div>
		<div></div>
	</header>

	<div id="page-content">
		{@render children?.()}
	</div>

	<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
	<div
		class={showMenu ? 'cover' : 'hidden cover'}
		onclick={() => {
			showMenu = false;
		}}
		aria-label="menu-control"
	></div>
</div>

<style>
	#page {
		flex-grow: 1;
		padding: 1em;
	}

	#page-header {
		display: none;
	}

	/* https://stackoverflow.com/questions/46086483/how-to-apply-styles-to-slot-element-in-svelte */
	#page-content > :global(:first-child) {
		margin-top: 0;
	}

	#page-header .left,
	#page-header .right {
		flex: 1;
	}

	.left {
		display: flex;
		align-items: center;
	}

	#burger-button {
		display: flex;
		background-color: var(--background-color);
		border: none;
		padding: 0px;
	}

	#burger-icon {
		height: 1.25em;
		width: 1.25em;
		stroke: var(--font-color);
	}

	.hidden {
		display: none;
	}

	.cover {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	@media screen and (max-width: 56rem) {
		#page {
			transition: 0.2s ease-in-out;
			transition-property: transform, margin, opacity, visibility;
			will-change: transform, margin, opacity;
		}

		.opaque {
			opacity: 0.25;
		}

		#page-header {
			display: flex;
		}
	}
</style>
