export interface SONG_LIST {
    SONG_LIST: string;
    SEARCH: string;
    TITLE: string;
    ARTIST: string;
}

export const SONG_LIST: { [lang: string]: SONG_LIST; } = {
    'cn': {
        SONG_LIST: '歌单',
        SEARCH: '搜索（没准备好）',
        TITLE: '标题',
        ARTIST: '歌手',
    },
    'jp': {
        SONG_LIST: '楽曲リスト',
        SEARCH: '検索（準備ができていない）',
        TITLE: 'タイトル',
        ARTIST: 'アーティスト',
    },
};
