import { defineConfig } from 'astro/config';

// Static output. Each page is emitted as /<slug>/index.html so the old Framer
// URLs (e.g. /Shotscope) keep working on any static host.
export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
