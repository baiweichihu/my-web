# My Web

A personal website built with React, Vite, Bootstrap, and GitHub Pages.

Hero is independent from sections. Regular content sections are hard-coded React/HTML files.

## Local Development

```bash
npm install
npm run dev
```

## Where To Write Content

Hero options live in:

```txt
src/hero/heroData.js
```

Edit the name options, intro options, and image options there. The console chooses which option is active. Hero always shows at the top of the page, does not appear in section sorting, and does not participate in layout dragging.

Hero layout lives in:

```txt
src/hero/Hero.jsx
```

Regular section metadata lives in:

```txt
src/siteData.js
```

Regular section bodies live in separate files under:

```txt
src/sections/
```

To add a regular section:

1. Add a record to `defaultSections` in `src/siteData.js`.
2. Create a matching component file in `src/sections`, for example `AboutSection.jsx`.
3. Import and map it in `src/sections/index.jsx`.
4. Run `npm run build`.

The console controls Hero choices and regular section sorting, visibility, and layout tuning.

If you do not want to write React/HTML/CSS, keep content in simple data files like `src/hero/heroData.js`, then let components render that data.

## Build

```bash
npm run build
```

The site uses a relative Vite base path, so it can be deployed from this repository without changing the repository name in config.
