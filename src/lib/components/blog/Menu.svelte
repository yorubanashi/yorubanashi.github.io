<!-- TODO: Make navigation menu recursive / any functions that use "dir" -->
<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { MENU } from '$lib/consts/i18n';
	import { type Language, LanguageList, parseLanguageFromPathname } from '$lib/consts/languages';
	import type { Dir } from '$lib/types/svelte';
	import MenuItem from './MenuItem.svelte';

	interface Props {
		dir: Dir;
		show: boolean;
	}

	let { dir, show }: Props = $props();
	console.log(dir);

	// Component Variables
	// Translation / Language menu toggle + toggle function
	let showLanguages: boolean = $state(false);
	const toggleLanguages = () => {
		showLanguages = !showLanguages;
	};

	// Component Methods
	const refreshLanguageList = (): [Language, Language[]] => {
		showLanguages = false;
		let selected: Language | null = null;
		let others: Language[] = [];
		LanguageList.forEach((ele) => {
			if ($page.url.pathname.includes(ele.linkPrefix) && selected === null) {
				selected = ele;
			} else {
				others.push(ele);
			}
		});

		// TODO: Fix crappy way of setting a default (index 2 should be EN).
		if (selected === null) {
			selected = LanguageList[2];
		}
		return [selected, others];
	};

	// Component "Hooks" + More State
	let ll = $state(refreshLanguageList());
	// sl = selected language, ol = other languages
	let sl: Language = $derived(ll[0]);
	let ol: Language[] = $derived(ll[1]);

	// More language-related state for i18n
	let language = $state(parseLanguageFromPathname($page.url.pathname));
	let i18n = $derived(MENU[language.apiPrefix]);

	afterNavigate(() => {
		ll = refreshLanguageList();
		language = parseLanguageFromPathname($page.url.pathname);
	});
</script>

<aside id="menu" class={show ? 'show' : ''}>
	<div id="menu-content">
		<h2 id="menu-title"><a href={sl.linkPrefix}>夜の思索</a></h2>
		<div>
			<input type="text" placeholder={i18n.SEARCH} />
		</div>
		<div>
			<ul id="translate-list">
				<li>
					<!-- svelte-ignore a11y_invalid_attribute -->
					<a href="javascript:void(0)" onclick={toggleLanguages} class="flex justify-between">
						<div class="flex align-center">
							<svg id="translate-icon" viewBox="0 0 24 24">
								<use href="/translate.svg#translate" />
							</svg>
							<div>{sl.name}</div>
						</div>
						{#if showLanguages}
							<div>▾</div>
						{:else}
							<div>▸</div>
						{/if}
					</a>
				</li>
				{#if showLanguages}
					{#each ol as ele}
						<li><a href={ele.linkPrefix}>{ele.name}</a></li>
					{/each}
				{/if}
			</ul>
		</div>
		<div id="navigation">
			<ul>
				{#if sl !== undefined && dir.dirs !== undefined}
					{#each Object.values(dir.dirs) as d}
						<li><MenuItem dir={d} lang={sl} /></li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</aside>

<style>
	#menu {
		height: 100vh;
		flex-basis: 16em;
	}

	#menu-title {
		margin-top: 0;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 0;
		border-radius: 0.25rem;
		outline: none;
		box-sizing: border-box;
		background-color: rgb(30, 30, 30);
	}

	#menu :global(a) {
		display: flex;
		text-decoration: none;
		color: var(--font-color);
	}

	#menu :global(a):hover {
		color: var(--font-color-secondary);
	}

	ul {
		list-style-type: none;
		margin-top: 1em;
		margin-bottom: 1em;
		padding: 0;
	}

	#menu :global(li) {
		margin-top: 0.75em;
		margin-bottom: 0.75em;
	}

	#menu-content {
		box-sizing: border-box;
		width: 16rem;
		padding: 1rem;
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

	@media screen and (max-width: 56rem) {
		#menu {
			background-color: var(--background-color);

			position: fixed;
			margin-inline-start: -16rem;
			top: 0;
			left: 0;
			z-index: 1;

			transition: 0.2s ease-in-out;
			transition-property: transform, margin, opacity, visibility;
			will-change: transform, margin, opacity;
		}

		.show {
			display: block;
			transform: translateX(16rem);
		}

		/* Should this be universal? First elements of the menu + page should have no margin-top? */
		h2 {
			margin-top: 0;
		}
	}
</style>
