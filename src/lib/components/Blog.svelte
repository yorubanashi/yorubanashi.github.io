<!-- TODOS -->
<!-- 1. Refactor out language bar and navigation menu into own components -->
<!-- 2. Make navigation menu recursive -->

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
	});

	// Control "translation" toggle
	const toggleTranslateCollapse = () => {
		translateCollapse = !translateCollapse;
	};

	import type { Dir } from '$lib/types/svelte';
	export let dir: Dir;

	const relativeLink = (link: string) => {
		return `${sl.linkPrefix}/${link}`;
	};
</script>

<div id="blog">
	<aside id="menu">
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
								<svg id="translate-icon" viewBox="0 0 24 24"
									><use href="/translate.svg#translate" /></svg
								>
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
					{#if dir.dirs !== undefined}
						{#each Object.entries(dir.dirs) as nav}
							<li><a href={relativeLink(nav[1].link.addr)}>{nav[1].link.name}</a></li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</aside>
	<div id="page">
		<slot />
	</div>
</div>

<style>
	#blog {
		width: 76em;
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
</style>
