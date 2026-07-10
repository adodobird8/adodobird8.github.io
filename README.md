# adaorambanefo.com

My personal site.

## How it's built

Vanilla HTML, CSS, and a tiny bit of JavaScript. No framework, no build step. Five pages, one shared stylesheet, hosted on GitHub Pages. The domain runs through Cloudflare.

Each page lives in its own folder so the URL stays clean (no `.html` at the end).

```
site/
├── index.html            home page (/)
├── style.css             all styling, shared across pages
├── script.js             tiny scroll-reveal script
├── resume.pdf            my actual resume (download button wired to this)
├── about/index.html      about page (/about)
├── research/index.html   research page (/research)
├── projects/index.html   projects page (/projects)
└── resume/index.html     resume page (/resume)
```

## Editing

Open the file. Find the text. Change it. Save. Refresh the browser.

When patterns repeat (project cards, research entries), the easiest way to add a new one is to copy an existing block and edit.

Colours and fonts live as CSS variables at the top of `style.css`. One hex value change ripples across the whole site.

## Publishing a change

```bash
git add .
git commit -m "what you changed"
git push
```

Live in about 30 seconds.

## Notes to future me

- Hard refresh (`Cmd+Shift+R`) if a CSS change isn't showing up.
- Keep the "Currently" section on the home page fresh. That's the part visitors come back for.
- Resume PDF lives in the root as `resume.pdf`. Replace it whenever I update my CV.
- The workshop section on `/projects` is where in-progress ideas live. When a project is ready, move its card up into the regular grid above.

---

Built by yours truly, with a lot of back-and-forth with Claude.
