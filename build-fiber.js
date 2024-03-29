const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ['src/Fiber/index.ts'],
    outfile: "public/fiber.js",
    format: "esm", // or "cjs"
    bundle: true,
    // splitting: true,
    // target: ['esnext']
  })
  .then((result) => console.log(result))
  .catch(() => process.exit(1));

