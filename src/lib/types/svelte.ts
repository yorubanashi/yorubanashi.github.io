// Hastily in-sync with the Go server structs.

export type Link = {
	addr: string;
	name: string;
};

export type Dir = {
	dirs: { [name: string]: Dir };
	link: Link;
};

export type SvelteWalkRequest = {
	lang: string;
};

export type SvelteWalkResponse = {
	dir: Dir;
	error: string;
};
