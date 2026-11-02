import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output. Each page is emitted as /<slug>/index.html so the old Framer
// URLs (e.g. /Shotscope) keep working on any static host.
export default defineConfig({
  output: 'static',
  integrations: [mdx()],
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
