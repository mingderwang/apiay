require('esbuild-wasm').build({
  entryPoints: ['app.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: 'build',
}).catch(() => process.exit(1))
