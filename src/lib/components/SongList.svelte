<!--
  Standalone list component that covers the entire viewport.
  Includes a search bar, and pagination (soon)!

  Built to display songs, but should be extended to cover all use cases.
-->

<script lang="ts">
  import type { Song } from "$lib/types/songs";

  export let songs: Song[];
</script>

<div id="container">
  <h1>歌单</h1>
  <div id="middle">
    <!-- TODO: Add a settings icon to the right + create a modal -->
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="搜索（没准备好）">
      <!-- SVG stolen from YouTube's search bar -->
      <svg
        class="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" focusable="false"
      >
        <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
      </svg>
    </div>

    <div id="listContainer">
      {#each songs as song}
        <div class="song">
          <a href={`/cn/songs/${song.title}`}>
            <div>
              <div>{song.title}</div>
              <div class="secondary">{song.artist}</div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>


<style>
  #container {
    height: 100dvh;
    width: 100dvw;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }

  h1 {
    margin: 0;
    margin-top: 8px;
  }

  #middle {
    width: 100%;
    max-width: 640px;
  }

  /* Search bar CSS styles */
  .search-bar {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
  }

  .search-input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 20px 10px 40px;

    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;

    caret-color: rgb(241, 241, 241);
    color: rgba(255, 255, 255, 0.88);
  }

  .search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    stroke: var(--font-color);
  }

  /* Actual list CSS styles */
  #listContainer {
    padding: 8px;
    padding-top: 0px;

    border-radius: 8px;
  }

  .song {
    padding: 4px 12px;
  }

  .song:hover {
    background-color: #ebebeb;
  }

  .song:not(:last-child) {
    border-bottom: 1px solid darkgray; /* Change the color and width as needed */
  }

  a {
    color: var(--font-color);
    text-decoration: none;
  }

  .secondary {
    color: var(--font-color-secondary);
    font-size: 1rem;
  }
</style>
