<script lang="ts">
  import Blog from "$lib/components/Blog.svelte";
  import type { Dir, SvelteWalkResponse } from "$lib/types/svelte";

  export let data: SvelteWalkResponse;
  const dirs: { [name: string]: Dir } = data.dir.dirs;
  console.log(dirs);
</script>

<Blog>
  <slot />
  {#if dirs !== undefined}
    {#each Object.entries(dirs) as dir}
    <div>{ dir[1].link.name }</div>
    {/each}
  {/if}
</Blog>

<style>
  :global(:root) {
    --font-family: Roboto, Arial, sans-serif;
    --font-color: rgb(241, 241, 241);
    --font-color-secondary: rgb(170, 170, 170);
  }

  :global(body) {
    scrollbar-color: rgb(170, 170, 170);
    margin: 0;

    background-color: rgb(15, 15, 15);
    font-size: 16px;
    font-family: var(--font-family);
    letter-spacing: .33px;
    color: var(--font-color);
  }

  :global(input[type="text"]) {
    font-size: inherit;
    font-family: inherit;
    color: var(--font-color);
    letter-spacing: .33px;
  }

  /* Helper class styles */

  :global(.flex) {
    display: flex;
  }

  :global(.align-center) {
    align-items: center;
  }

  :global(.justify-between) {
    justify-content: space-between;
  }
</style>
