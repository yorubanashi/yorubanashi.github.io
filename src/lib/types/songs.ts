// Hastily in-sync with the Go server structs.

export type Line = {
	pri: string;
	sec: string;
	rom: string;
	eng: string;
};

export type Verse = {
	lines: Line[];
};

export type Song = {
	title: string;
	artist: string;
	verses: Verse[];
};

export type SongRequest = {
	language: string;
	title?: string;
	artist?: string;
};

export type SongResponse = {
	songs: Song[];
	error: string;
};
