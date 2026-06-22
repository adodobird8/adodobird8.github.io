# adaorambanefo.com

My personal site. I made this because I wanted one place online to keep my research, projects, and current obsessions. Somewhere that wasn't LinkedIn.

## How it's built

Vanilla HTML and CSS. No framework, no build step. Five pages, one shared stylesheet, hosted on GitHub Pages. The domain runs through Cloudflare.

```
site/
├── index.html       home
├── research.html    labs and projects, with collaborators
├── projects.html    things I've built + the "in the workshop" section
├── about.html       personal blurb, hobbies, what I love right now
├── resume.html      CV content + PDF download
├── style.css        all styling, shared across pages
└── resume.pdf       my actual resume (download button is wired to this)
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
- The "Coming Soon" mystery on `projects.html` is intentional. When a project is ready, move its card up into the regular grid above.
- Keep the "Currently" section on `index.html` fresh. That's the part visitors come back for.
- Resume PDF lives in the root as `resume.pdf`. Replace it whenever I update my CV.

---

Built by yours truly, with a lot of back-and-forth with Claude.
