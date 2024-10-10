// Hastily in-sync with the Go server structs.

export interface Link {
  addr: string,
  name: string,
}

export interface Dir {
  dirs: { [name: string]: Dir },
  link: Link,
}

export interface SvelteWalkRequest {
  lang: string,
}

export interface SvelteWalkResponse {
  dir: Dir,
  error: string,
}
