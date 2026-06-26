import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generateUpdatedAt } from './scripts/generate-updated-at.mjs';

function updatedAtPlugin() {
  const trackedFiles = new Set([
    '/src/hero/heroData.js',
    '/src/sections/AboutSection.jsx',
    '/src/sections/InterestsSection.jsx',
    '/src/sections/StudySection.jsx',
  ]);

  return {
    name: 'my-web-updated-at',
    buildStart() {
      generateUpdatedAt();
    },
    handleHotUpdate({ file, server }) {
      const normalizedFile = file.replaceAll('\\', '/');
      if (!trackedFiles.has(normalizedFile.slice(normalizedFile.lastIndexOf('/src/')))) return;
      generateUpdatedAt();
      const generatedModule = server.moduleGraph.getModuleById('/src/generated/updatedAt.js');
      if (generatedModule) server.moduleGraph.invalidateModule(generatedModule);
    },
  };
}

export default defineConfig({
  plugins: [updatedAtPlugin(), react()],
  base: './',
});
