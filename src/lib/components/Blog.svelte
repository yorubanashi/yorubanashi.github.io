<script lang="ts">
  // Workaround for a11y warning...
  const escapeHatch = "#";

  // Order translation toggle list items
  import { page } from '$app/stores';
  interface tl {
    prefix: string;
    name: string;
  }
  const tlList: tl[] = [
    { prefix: "/cn", name: "中文" },
    { prefix: "/jp", name: "日本語" },
    { prefix: "/", name: "English" },
];
  const [tlFirst, tlRest] = ((): [tl | undefined, tl[]] => {
    let x: tl | undefined = undefined;
    let y: tl[] = [];
    tlList.forEach((ele) => {
      // TODO: Make this logic cleaner?
      if ($page.url.pathname.includes(ele.prefix) && x === undefined) {
        x = ele
      } else {
        y.push(ele)
      }
    });
    return [x, y];
  })();

  // Control "translation" toggle
  let translateCollapse: boolean = false;
  const toggleTranslateCollapse = () => { translateCollapse = !translateCollapse };
</script>

<div id="blog">
  <aside id="menu">
    <div id="menu-content">
      <h2>Title</h2>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <ul id="translate-list">
          <li>
            <a href={escapeHatch} on:click={toggleTranslateCollapse} class="flex justify-between">
              <div class="flex align-center">
                <svg id="translate-icon" viewBox="0 0 24 24"><use href="/translate.svg#translate" /></svg>
                <div>{tlFirst?.name}</div>
              </div>
              {#if translateCollapse}
                <div>▾</div>
              {:else}
                <div>▸</div>
              {/if}
            </a>
          </li>
          {#if translateCollapse}
            {#each tlRest as ele}
              <li><a href={ele.prefix}>{ele.name}</a></li>
            {/each}
          {/if}
        </ul>
      </div>
      <div>
        <ul>
          <li>English Page</li>
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
    padding: .5rem;
    border: 0;
    border-radius: .25rem;
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
