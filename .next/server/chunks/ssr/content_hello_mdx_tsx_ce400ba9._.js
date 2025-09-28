module.exports = [
"[project]/content/hello.mdx.tsx [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/_0b589905._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/content/hello.mdx.tsx [app-rsc] (ecmascript)");
    });
});
}),
];