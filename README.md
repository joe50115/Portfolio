# jo@projects — portfolio site (React + Vite)

A personal project portfolio: Home, Projects, Project Archive, and Contact
pages, rebuilt as a React (Vite) single-page app. No backend — all content
lives in `src/data/projects.js`.

## Run it

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  main.jsx              entry point (BrowserRouter + App)
  App.jsx               route table
  index.css             design tokens + all component/page styles
  data/
    projects.js          every project lives here — edit this to add/update projects
  utils/
    placeholder.js        deterministic SVG cover-image generator (no image files needed)
    markdown.js            minimal markdown -> HTML renderer for project write-ups
    status.js               status label helper + the list of valid statuses
  components/            reusable, presentational pieces
    NavBar.jsx, Footer.jsx, ProjectCard.jsx, StatusBadge.jsx, TagPill.jsx,
    SearchBar.jsx, FilterGroup.jsx, Gallery.jsx, MarkdownContent.jsx,
    ProjectPagination.jsx
  screens/                one component per route/page
    HomeScreen.jsx, ProjectsScreen.jsx, ArchiveScreen.jsx,
    ProjectDetailScreen.jsx, ContactScreen.jsx
```

This mirrors the `components/` vs `screens/` split (and the React Router
`Routes`/`Route` setup) used in the CSE 2102 farm-market project, minus the
Flask backend and Docker Compose layer — this site is static/client-only.

## Editing content

Every project card, the archive filters, and the detail pages are all
generated from the array in `src/data/projects.js`. Add a new object to that
array — `slug`, `title`, `label`, `status`, `date`, `tags`, `summary`,
`gallerySeeds`, and a markdown `content` string — and it will automatically
show up in the Archive with search/filtering, and get its own detail page
with automatic prev/next navigation based on array order.
