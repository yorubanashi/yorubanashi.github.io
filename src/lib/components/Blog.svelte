<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Dir } from '$lib/types/svelte';
	import Menu from './blog/Menu.svelte';
	import Page from './blog/Page.svelte';

	// Component Props
	export let dir: Dir;

	// Component Variables
  let pageTitle: string;
  $: pageTitle = findPageTitle(dir);
  
	let showMenu: boolean = false;
	const toggleMenu = () => {
		showMenu = !showMenu;
	};

	// Component Methods
	// findPageTitle recursively digs into dir to find a matching address to grab the page title.
	const findPageTitle = (dir: Dir): string => {
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

	// Component "Hooks"
	afterNavigate(() => {
    pageTitle = findPageTitle(dir);
		showMenu = false;
	});
</script>

<svelte:head>
	<title>
		{pageTitle}
	</title>
</svelte:head>

<div id="blog">
	<Menu {dir} show={showMenu} />

	<Page bind:showMenu {pageTitle} {toggleMenu}>
		<slot />
	</Page>
</div>

<style>
	#blog {
		max-width: 76em;
		height: 100vh;
		margin: 0 auto;
		display: flex;
	}
</style>
