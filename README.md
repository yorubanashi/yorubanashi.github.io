## TODOs

- Fix API workaround for `songs-single`
  - Currently combined the nested parameters into one slug, and split the artist and title out before sending the API request to the server
  - At the very least, abstract the delination into `types/songs`
  - See https://svelte.dev/docs/kit/page-options#prerender-Route-conflicts for more info
