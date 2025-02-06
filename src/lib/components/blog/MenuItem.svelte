<script lang="ts">
	import type { Language } from '$lib/consts/languages';
    import type { Dir } from '$lib/types/svelte';
    import Self from "./MenuItem.svelte";

    interface Props {
        dir: Dir;
        lang: Language;
    }

    let { dir, lang }: Props = $props();

	// relativeLink appends the selected language's prefix onto the intended link.
	let relativeLink = $derived((link: string) => {
		return `${lang.linkPrefix}/${link}`;
	});
</script>

<div>
    <a href={relativeLink(dir.link.addr)}>{dir.link.name}</a>
    <ul>
        {#if dir.dirs !== undefined}
            {#each Object.values(dir.dirs) as d}
                <li><Self dir={d} lang={lang} /></li>
            {/each}
        {/if}
    </ul>
</div>

<style>
    /* Mimic <li> top and bottom margins in Menu.svelte to allow continuity for nested lists */
    ul {
		list-style-type: none;
		margin-top: 0.75em;
		margin-bottom: 0.75em;
        margin-left: 1.5em;
		padding: 0;
    }
</style>
