---
title: Personal Website
date: 2019-09-23
links:
  - name: Website
    icon: fas fa-rocket
    url: https://schoeberl.dev
  - name: GitHub
    icon: fab fa-github
    url: https://github.com/stefanschoeberl/stefanschoeberl.github.io
technologies: [GitHub Pages, Eleventy, Tailwind CSS, Font Awesome, UIkit]
thumbnail: personal-website-thumbnail.png
---
I have wanted to create a personal website for myself for a long time.
When Google started offering .dev domains in 2019, it was the perfect opportunity to realize this long-overdue project.

One of the main goals was to make the long-term maintenance of the website as simple as possible.
[Jekyll](https://jekyllrb.com){target="_blank" rel="noreferrer"} was the right tool for this task.
It allows defining the website's structure using templates, which can then be dynamically filled with data.
The content of the website is added in the form of YML (for example, technology overview) or Markdown (for example, project texts).
Additionally, this allows the entire website to be managed in Git, as it consists entirely of code.

[UIkit](https://getuikit.com){target="_blank" rel="noreferrer"} was used as the design framework.

For hosting, [GitHub Pages](https://pages.github.com){target="_blank" rel="noreferrer"} was a suitable choice.
GitHub Pages directly supports Jekyll and automatically "compiles" the site with each push.
By default, the website is hosted on a .github.io subdomain, but it is straightforward to add a custom domain.

In 2021, the website received a new look.
The default UIkit design was replaced with a custom and individual design implemented using [Tailwind CSS](https://tailwindcss.com){target="_blank" rel="noreferrer"}.
All icons are now sourced from [Font Awesome](https://fontawesome.com){target="_blank" rel="noreferrer"}.
Only specific components from UIkit were retained, such as the Slideshow and the Masonry Grid.
As Tailwind CSS requires additional steps during compilation, a GitHub Action was configured for this purpose.

In 2022, the website was migrated from Jekyll to [Eleventy](https://www.11ty.dev){target="_blank" rel="noreferrer"}.
This eliminated Ruby as a dependency, and the entire build process now runs on npm and Node.js.
When updating the website, the page and CSS are now compiled together in a single GitHub Action.
