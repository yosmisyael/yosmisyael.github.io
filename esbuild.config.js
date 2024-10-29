import { context } from "esbuild";

const result = await context({
  entryPoints: [
    { in: "js/index.js", out: "bundle" },
    { in: "styles/index.css", out: "bundle" },
  ],
  outdir: "dist",
  bundle: true,
  external: ["*.woff2", "*.svg", "*.png"],
});
await result.watch();
console.log("watching");
