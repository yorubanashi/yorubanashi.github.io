<!-- Standalone navigation component that covers the entire viewport. -->

<script context="module" lang="ts">
  export interface Link {
    label: string;
    link: string;
  }
</script>


<script lang="ts">
  export let links: Link[];
</script>

<div id="container">
  <div>
    <ul>
      {#each links as link}
        <li><a href={link.link}><div>
          {link.label}
        </div></a></li>
      {/each}
    </ul>
  </div>
</div>

<style>
  #container {
    height: 100dvh;
    width: 100dvw;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Courier New', Courier, monospace;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    padding: 0.5em;
  }

  a {
    color: black;
    text-decoration: none;
    text-align: center;

    font-size: 1.25em;
  }

  a:hover {
    cursor: pointer;
    color: blue;
  }
</style>
