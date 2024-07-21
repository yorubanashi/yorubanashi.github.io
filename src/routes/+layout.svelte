<slot />

<style>
  :global(:root) {
    --font-family: Roboto, Arial, sans-serif;
    --font-color: rgb(241, 241, 241);
    --font-color-secondary: rgb(170, 170, 170);
  }

  :global(body) {
    margin: 0;

    background-color: rgb(15, 15, 15);
    font-size: 16px;
    font-family: var(--font-family);
    color: var(--font-color);
  }

  :global(input[type="text"]) {
    font-size: inherit;
    font-family: inherit;
  }
</style>
