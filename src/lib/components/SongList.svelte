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
  <div id="middle">
    <!-- TODO: Add a settings icon to the right + create a modal -->
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="Search (Not Functional)">
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
          <a href={`/chinese/songs/${song.title}`}>
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
    justify-content: center;
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

    border: 1px solid #ccc;
    border-radius: 20px;
    /* outline: none; */
  }

  .search-icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    stroke: black;
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
    color: black;
    text-decoration: none;
  }

  .secondary {
    color: gray;
    font-size: 0.8em;
  }
</style>
