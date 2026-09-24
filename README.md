# Andy Creighton — Portfolio

A plain HTML/CSS website with a small optional JavaScript asset loader. No framework, installation, build step or Adobe subscription is required. Open `index.html` to view it locally.

## Editing

- Edit the text directly in the relevant `.html` file. Each of the five projects has its own page.
- `styles.css` contains the shared near-black theme, spacing, responsive layout and hover effects.
- `assets.js` connects cover images, empty gallery slots, the CV PDF and profile URLs. Filled galleries use ordinary image elements in the project HTML. Use relative paths such as `assets/virtual-driving-school-cover.jpg`.
- The site remains readable and navigable without JavaScript. Optional images and configured external links are enhanced by JavaScript. For a fully JavaScript-free version, put those assets directly into the HTML.

## GitHub Pages

Copy the contents of this folder to the root of a GitHub repository. Keep `index.html` at the root and include the hidden `.nojekyll` file. In the repository's Pages settings, select deployment from your branch's root directory. No custom domain or repository name is hard-coded. All page and asset paths are relative, so the site also works under a repository subpath.

The site is hosted at https://andycreighton87.github.io/ from the public repository https://github.com/AndyCreighton87/AndyCreighton87.github.io. GitHub Pages publishes the root of the main branch. Commit and push changes to main to update the live site.

## Missing originals

See `ASSETS-NEEDED.md` for the image inventory and remaining content. The design uses real screenshot references where available and clearly labelled neutral placeholders elsewhere. It does not include invented game artwork, fabricated profile URLs, or a fabricated CV download.

## Typography and reference material

Bebas Neue is bundled locally, with its SIL Open Font License in `assets/FONT-LICENSE.txt`. Font source: https://github.com/google/fonts/tree/main/ofl/bebasneue

The supplied Adobe screenshots establish the black background, condensed uppercase type, sparse layouts, and Contact artwork. Screenshot-derived Starfall and Jinx images are displayed through CSS windows so that surrounding old page text is hidden; the original files are retained unmodified. These are interim, lower-resolution references. Replace them with the original assets when available. The exact homepage screenshot was not returned by the attachment retrieval, so its header and grid follow the detailed design description in the original conversation.

## Checks performed

JavaScript syntax, local page/asset links, desktop layout, narrow-screen reflow, project navigation, Contact artwork and reference galleries. See the delivery note for any limitations discovered during verification.
