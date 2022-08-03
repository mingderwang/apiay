require('esbuild-wasm').build({
  entryPoints: ['src/main.test.ts'],
  bundle: true,
  platform: 'node',
  target: ['node16.16'],
  outdir: 'dist',
}).catch(() => process.exit(1))
