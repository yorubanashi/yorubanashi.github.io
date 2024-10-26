<!-- TODOS -->
<!-- 1. Refactor out language bar and navigation menu into own components -->
<!-- 2. Make navigation menu recursive / any functions that use "dir" -->

<script lang="ts">
	// Workaround for a11y warning...
	const escapeHatch = 'javascript:void(0)';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { type Language, LanguageList } from '$lib/consts/languages';

	// sl = selected language, ol = other languages
	let sl: Language;
	let ol: Language[];
	let translateCollapse: boolean = false;
	const refreshLanguageList = (): [Language, Language[]] => {
		translateCollapse = false;
		let selected: Language | null = null;
		let others: Language[] = [];
		LanguageList.forEach((ele) => {
			// TODO: Make this logic cleaner?
			if ($page.url.pathname.includes(ele.linkPrefix) && selected === null) {
				selected = ele;
			} else {
				others.push(ele);
			}
		});

		// TODO: Fix hack to get around typing.
		if (selected === null) {
			selected = LanguageList[2];
		}
		return [selected, others];
	};

	[sl, ol] = refreshLanguageList();
	afterNavigate(() => {
		[sl, ol] = refreshLanguageList();
		showMenu = false;
	});

	// Control "translation" toggle
	const toggleTranslateCollapse = () => {
		translateCollapse = !translateCollapse;
	};

	import type { Dir } from '$lib/types/svelte';
	export let dir: Dir;

	// TODO: Can we avoid the reactive statement here?
	$: relativeLink = (link: string) => {
		return `${sl.linkPrefix}/${link}`;
	};

	// TODO: Same here, can we avoid the reactive statement here?
	$: findPath = (dir: Dir): string => {
		// If there's no base page or base directories, then default to something...
		if (dir.link === undefined) {
			return '夜噺';
		} else if (dir.dirs === undefined) {
			return dir.link.name;
		}

		const matches = Object.entries(dir.dirs).filter(([_, d]) => {
			return $page.url.pathname.includes(d.link.addr);
		});
		if (matches.length > 0) {
			return matches[0][1].link.name;
		}
		return dir.link.name;
	};

	// Menu control in mobile
	let showMenu: boolean = false;
	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<svelte:head>
	<title>
		{findPath(dir)}
	</title>
</svelte:head>

<div id="blog">
	<aside id="menu" class={showMenu ? 'show' : ''}>
		<div id="menu-content">
			<h2>Title</h2>
			<div>
				<input type="text" placeholder="[WIP] Search" />
			</div>
			<div>
				<ul id="translate-list">
					<li>
						<a href={escapeHatch} on:click={toggleTranslateCollapse} class="flex justify-between">
							<div class="flex align-center">
								<svg id="translate-icon" viewBox="0 0 24 24">
									<use href="/translate.svg#translate" />
								</svg>
								<div>{sl.name}</div>
							</div>
							{#if translateCollapse}
								<div>▾</div>
							{:else}
								<div>▸</div>
							{/if}
						</a>
					</li>
					{#if translateCollapse}
						{#each ol as ele}
							<li><a href={ele.linkPrefix}>{ele.name}</a></li>
						{/each}
					{/if}
				</ul>
			</div>
			<div>
				<ul>
					{#if sl !== undefined && dir.dirs !== undefined}
						{#each Object.entries(dir.dirs) as nav}
							<li><a href={relativeLink(nav[1].link.addr)}>{nav[1].link.name}</a></li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</aside>
	<div id="page" class={showMenu ? 'opaque' : ''}>
		<header id="page-header">
			<div class="left">
				<button id="burger-wrapper" on:click={toggleMenu}>
					<svg id="burger-icon" viewBox="0 0 24 24">
						<use href="/menu.svg#menu-one" />
						<use href="/menu.svg#menu-two" />
						<use href="/menu.svg#menu-three" />
					</svg>
				</button>
			</div>
			<div class="center">{findPath(dir)}</div>
			<div class="right"></div>
			<div></div>
		</header>
		<slot />

		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div
			class={showMenu ? 'cover' : 'hidden cover'}
			on:click={() => {
				showMenu = false;
			}}
			aria-label="menu-control"
		></div>
	</div>
</div>

<style>
	#blog {
		max-width: 76em;
		height: 100vh;
		margin: 0 auto;
		display: flex;
	}

	/* Menu Styles */

	#menu {
		flex-basis: 16em;
		padding: 1em;
	}

	#menu input {
		width: 100%;
		padding: 0.5rem;
		border: 0;
		border-radius: 0.25rem;
		outline: none;
		box-sizing: border-box;
		background-color: rgb(30, 30, 30);
	}

	#menu a {
		display: flex;
		text-decoration: none;
		color: var(--font-color);
	}

	#menu a:hover {
		color: var(--font-color-secondary);
	}

	#menu ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	#menu li {
		margin: 1em 0;
	}

	#menu-content {
		font-size: 0.875em;
	}

	#translate-icon {
		height: 1em;
		width: 1em;
		margin-inline-end: 0.5em;

		fill: var(--font-color);
	}

	#translate-list li:not(:first-child) {
		padding-left: 1.5em;
	}

	/* Page Styles */

	#page {
		flex-grow: 1;
		padding: 1em;
	}

	#page-header {
		display: none;
	}

	#page-header .left,
	#page-header .right {
		flex: 1;
	}

	/* Media styles */

	@media screen and (max-width: 56rem) {
		#menu {
			/* display: none; */

			position: fixed;
			top: 0;
			left: 0;
			background-color: var(--background-color);
			transition: 0.2s ease-in-out;
			transition-property: transform, margin, opacity, visibility;
			will-change: transform, margin, opacity;
			margin-inline-start: -16rem;
			z-index: 1;
		}

		#blog .show {
			display: block;
			transform: translateX(16rem);
		}

		h2 {
			margin-top: 0;
		}

		#page-header {
			display: flex;
		}

		.opaque {
			opacity: 0.25;
		}

		#page {
			transition: 0.2s ease-in-out;
			transition-property: transform, margin, opacity, visibility;
			will-change: transform, margin, opacity;
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
	}

	.left {
		display: flex;
		align-items: center;
	}

	#burger-wrapper {
		display: flex;
		background-color: var(--background-color);
		border: none;
		padding: 0px;
	}

	#burger-icon {
		height: 1.25em;
		width: 1.25em;
		fill: var(--font-color);
	}
</style>
