# End of the Line

Riding every Brisbane train line to its last stop, starting from Roma Street, and finding out what there is to do at the end.

Live site: https://skrymer.github.io/End-of-the-line/

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Adding a post

1. Create a folder in `src/content/posts/<slug>/`, copy `templates/post.md` into it as `index.md`, and add the post's photos. See `templates/README.md` for the structure and style.
2. Fill in the frontmatter: `title`, `description`, `date`, `line`, `lineCode`, `destination`, `cover`, `coverAlt` (and `draft: true` to hide it).
3. Reference photos with relative paths, e.g. `![Alt text](./photo.jpg)`. Astro resizes and converts them at build time.
4. Strip location metadata from photos before committing. The repo is public.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/End-of-the-line/
npm run build
```
