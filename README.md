# vitejs-react-wasm-edge
## starter repo with : vite, react, webassembly, cloudflare workers




### How to use:

#### development build
`npm run dev` - this will build the AssemblyScript sources present in `src-assembly` and output to `src-assembly/bin` then proceed with vite. Currently there's no HMR for web assembly, you'll need to `npm run dev:wasm` whenever you modify something in wasm sources.

### production build
`npm run build` - this will build everything to `dist`. You can preview it with `npm run preview`. Includes a `prebuild` which builds the wasm sources

### build & publish to cloudflare workers
1. configure a worker in cloudflare then `wrangler login` (you only need to do this the first time)
2. `npm run publish`
