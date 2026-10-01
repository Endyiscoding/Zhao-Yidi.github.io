# Yufei Jiang's Academic Website

This personal website is built with Jekyll and published through GitHub Pages. Its custom design lives in `_sass/_academic.scss`.

## Content

- Home page and profile: `_pages/about.md`
- CV: `_pages/cv.md`
- News: `_data/news.yml`. Add new items at the top with a `YYYY-MM` date. The home page shows the 10 newest items and offers a **View earlier news** control for the rest.
- Publications: `_publications/`. Set `selected: true` and `selected_order` to place a paper in the home page's Selected publications section. Use `image` and `image_alt` for a static preview, and `preview_video` for a looping video preview.
- Projects: `_teaching/`. Set `teaser` for the static card image and `preview_video` for a looping video preview. The site uses this collection for research projects.
- Navigation: `_data/navigation.yml`
- Contact details and site settings: `_config.yml`

Internal `projecturl` values should start with `/`; external project and code URLs can use full `https://` addresses. The AM-Bench image comes from its [official project website](https://ambench.github.io/static/images/system-architecture.png).

## Run locally on macOS

Install Ruby 3.2 and the site's dependencies:

```bash
brew install ruby@3.2
export PATH="/opt/homebrew/opt/ruby@3.2/bin:$PATH"
bundle config --local path vendor/bundle
bundle install
```

Start the local server:

```bash
bundle exec jekyll serve --host 127.0.0.1
```

Open <http://127.0.0.1:4000>. Jekyll rebuilds pages when source files change. In a new terminal, run the `export PATH=...` command again before using `bundle`. To check the production build, run `bundle exec jekyll build`.

## Run with Docker

If Docker is installed, you can run the site without a local Ruby installation:

```bash
docker build -t yufei-jekyll .
docker run --rm -p 4000:4000 -v "$(pwd):/usr/src/app" yufei-jekyll
```

Open <http://127.0.0.1:4000>.

## Project videos

Full demonstration videos are stored beside their project images in `images/Project/` and use HTML5 video controls on the project pages. Compressed previews retain their original duration and resolution and use the `preview_video` field in project and publication front matter. They play muted and loop only while visible; visitors who request reduced motion see the static poster image instead.

The IROS 2026 outdoor demonstration is `images/Project/iros2026/MPC_outdoor_hero.mp4`. The ICRA 2026 projects have their own full videos and shorter previews in `images/Project/contact_vio/` and `images/Project/e2e_planner/`. Keep video files compact to limit repository size and page bandwidth.

## Credits

This site is based on the [Academic Pages](https://academicpages.github.io/) Jekyll template, which builds on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/). See [LICENSE](LICENSE) for licensing details.
