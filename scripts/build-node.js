require('esbuild-wasm').build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  platform: 'node',
  target: ['node16.16'],
  outdir: 'build',
}).catch(() => process.exit(1))
