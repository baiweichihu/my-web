# TODO

## Current Direction

- [x] Keep Hero independent from regular sections.
- [x] Keep Hero always visible at the top of the page.
- [x] Store Hero options in `src/hero/heroData.js`.
- [x] Store regular section metadata in `src/siteData.js`.
- [x] Store regular section bodies as files under `src/sections/`.
- [x] Make the console open directly from settings.

## Later Ideas

- Add real personal content to the self-introduction section.
- Add more regular sections when the site structure becomes clearer.
- Add image assets for Hero and in-page content.
- Lazy-load console-only libraries to reduce the public page bundle size.

## Unresolved Issues

- Hero carousel arrows should automatically contrast with the current image/background while staying semi-transparent.
- Hero image sizing still needs a reliable constraint model: images should stay inside an invisible maximum square, keep their original ratio, and never overflow.
