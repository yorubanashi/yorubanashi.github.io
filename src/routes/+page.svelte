<div id="container">
  <div>
    <ul>
      <li><a href="/chinese"><div>Chinese</div></a></li>
      <li><a href="/#"><div>Japanese [WIP]</div></a></li>
    </ul>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  #container {
    height: 100vh;
    width: 100vw;

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
  }

  a:hover {
    cursor: pointer;
    color: blue;
  }
</style>
