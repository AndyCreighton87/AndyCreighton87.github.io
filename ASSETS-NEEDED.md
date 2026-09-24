# Remaining portfolio assets

## Still needed

- **Starfall: Commander:** homepage cover, original gameplay images/video/GIF, full-resolution behaviour tree and code images. The recovered Adobe screenshots remain in its gallery for now.
- **Pinball Lockdown / Freedom:** homepage cover and gameplay screenshots from both games.
- **Jinx:** original transparent characters PNG/GIF. Contact still uses the characters recovered from the Adobe screenshot.
- **CV:** the current PDF.
- **LinkedIn:** the full profile URL.

## Added from Desktop/Portfolio

- Virtual Driving School: cover and six gallery images.
- Take That: This Life: portrait cover and six mobile gallery images.
- Classified: France '44: cover and six gallery images.
- Formula Retro Racing: World Tour: cover beside the small homepage credit. Gameplay screenshots remain in the source folder because this project has no dedicated page.

The source folder was left unchanged. ASSET-INVENTORY.md maps imported files to their original names and records unused alternatives.

## Adding replacements

Put originals in assets/. Update cover paths, CV, LinkedIn and Jinx in assets.js. Filled galleries use normal images in their project HTML so they also work without JavaScript; edit those image paths and captions directly. Empty Starfall/Pinball gallery slots still support the asset-map keys.

The Take That cover is shown in full, with white space on either side, to preserve its portrait composition. A landscape cover can replace it later; remove tile-portrait from its homepage tile when doing so.
