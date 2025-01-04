// Hastily in-sync with the Go server structs.

export interface Line {
	pri: string;
	sec: string;
	rom: string;
	eng: string;
}

export interface Verse {
	lines: Line[];
}

export interface Song {
	title: string;
	artist: string;
	verses: Verse[];
}

export interface SongRequest {
	language: string;
	title?: string;
	artist?: string;
}

export interface SongResponse {
	songs: Song[];
	error: string;
}
