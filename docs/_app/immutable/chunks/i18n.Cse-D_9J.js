const t={apiPrefix:"cn",linkPrefix:"/cn",name:"中文"},i={apiPrefix:"en",linkPrefix:"/en",name:"English"},r={apiPrefix:"jp",linkPrefix:"/jp",name:"日本語"},a=[t,r,i],S=s=>{for(let n=0;n<a.length;n++){let e=a[n];if(s.startsWith(e.linkPrefix))return e}return i},c={cn:{SONG_LIST:"歌单",SEARCH:"搜索（没准备好）",TITLE:"标题",ARTIST:"歌手"},jp:{SONG_LIST:"楽曲リスト",SEARCH:"検索（準備ができていない）",TITLE:"タイトル",ARTIST:"アーティスト"}},p={en:{SEARCH:"Search (...)"},cn:{SEARCH:"搜索（。。。）"},jp:{SEARCH:"検索（。。。）"}};export{a as L,p as M,c as S,S as p};
