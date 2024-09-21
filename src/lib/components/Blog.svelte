<script lang="ts">

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
            <div class="flex justify-between">
              <div class="flex align-center">
                <svg id="translate-icon" viewBox="0 0 24 24"><use href="/translate.svg#translate" /></svg>
                <div>English</div>
              </div>
              <div>▸▾</div>
            </div>
          </li>
          <li>Chinese</li>
          <li>Japanese</li>
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
