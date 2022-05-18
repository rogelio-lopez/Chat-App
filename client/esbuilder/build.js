require("esbuild").build({
  entryPoints: ["app.ts"],
  outfile: "./esbuilder/output.js",
  bundle: true,
  loader: {".ts": "ts"}
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));