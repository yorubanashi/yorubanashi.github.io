// Hastily in-sync with the Go server structs.

export interface Song {
  title: string;
  artist: string;
}

export interface SongResponse {
  songs: Song[];
  error: string;
}
