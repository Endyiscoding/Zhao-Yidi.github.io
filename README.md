# Yufei Jiang · Academic website

网站保留 Jekyll / GitHub Pages 构建方式，使用独立的 `_sass/_academic.scss` 管理新版样式。

- 首页内容：`_pages/about.md`；简历：`_pages/cv.md`。
- 首页动态：`_data/news.yml`，新消息放在最上方，按时间倒序维护；日期采用 `YYYY-MM`，正文支持 Markdown 链接与加粗。首页默认展示前 10 条，超过 10 条时自动出现 **View earlier news**，点击可展开或收起所有更早动态；无需删除历史记录，也不依赖 JavaScript。
- 论文数据：`_publications/`。设置 `selected: true` 和 `selected_order` 可控制首页代表论文与排序；`image`、`image_alt` 用于论文图示。
- 论文资源：`projecturl` 支持站内路径和完整外部网址；`codeurl` 显示代码仓库链接。AM-Bench 图示来自其[官方项目网站](https://ambench.github.io/static/images/system-architecture.png)。
- 项目内容：`_teaching/`；导航：`_data/navigation.yml`；联系方式：`_config.yml`。
- CV 页的 **Print / Save PDF** 打开浏览器打印窗口，可选择保存为 PDF。

本地运行：`bundle exec jekyll serve --host 127.0.0.1`，然后访问 `http://127.0.0.1:4000`。构建检查：`bundle exec jekyll build`。

---

# Academic Pages
**Academic Pages is a Github Pages template for academic websites.**

![Academic Pages template example](images/homepage.png "Academic Pages template example")

# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running locally

When you are initially working your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

## Using Docker

Working from a different OS, or just want to avoid installing dependencies? You can use the provided `Dockerfile` to build a container that will run the site for you if you have [Docker](https://www.docker.com/) installed.

Start by build the container:

```bash
docker build -t jekyll-site .
```

Next, run the container:
```bash
docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site
```

To run the `docker run` command on Windows, you need to adjust the syntax for the volume mapping (`-v`) as Windows uses different path formats. Here's how to run your command on Windows:

### Steps for Windows:
1. **Check Docker Installation**: Ensure Docker is installed and running.
2. **Adjust Path for Volume Mapping**:

   - On Windows, replace `$(pwd)` with the full absolute path to your current directory. For example:

     ```bash
     -v C:\path\to\your\site:/usr/src/app
     ```

### Full Command Example:
```bash
docker run -p 4000:4000 --rm -v C:\path\to\your\site:/usr/src/app jekyll-site
```

### Things to Keep in Mind:
1. **Use PowerShell**:
   - If you are using PowerShell, you can use `${PWD}` for the current directory:
     ```bash
     docker run -p 4000:4000 --rm -v ${PWD}:/usr/src/app jekyll-site
     ```

2. **Enable Docker File Sharing**:
   - If your volume doesn't map correctly, ensure Docker has access to the drive where your project resides. To do this:
     - Open Docker Desktop.
     - Go to *Settings* → *Resources* → *File Sharing*.
     - Add your drive (e.g., `C:`).

3. **Run in Command Prompt or PowerShell**:
   - In *Command Prompt*:
   
     ```bash
     docker run -p 4000:4000 --rm -v C:\path\to\your\site:/usr/src/app jekyll-site
     ```
   - In *PowerShell*:

     ```bash
     docker run -p 4000:4000 --rm -v ${PWD}:/usr/src/app jekyll-site
     ```

# Maintenance

Bug reports and feature requests to the template should be [submitted via GitHub](https://github.com/academicpages/academicpages.github.io/issues/new/choose). For questions concerning how to style the template, please feel free to start a [new discussion on GitHub](https://github.com/academicpages/academicpages.github.io/discussions).

This repository was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE.md). It is currently being maintained by [Robert Zupko](https://github.com/rjzupkoii) and additional maintainers would be welcomed.

## Bugfixes and enhancements

If you have bugfixes and enhancements that you would like to submit as a pull request, you will need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository as opposed to using it as a template. This will also allow you to [synchronize your copy](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) of template to your fork as well.

Unfortunately, one logistical issue with a template theme like Academic Pages that makes it a little tricky to get bug fixes and updates to the core theme. If you use this template and customize it, you will probably get merge conflicts if you attempt to synchronize. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch.

---
<div align="center">
    
![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/academicpages/academicpages.github.io.svg)](https://github.com/academicpages/academicpages.github.io/graphs/contributors)
[![GitHub release](https://img.shields.io/github/v/release/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/releases/latest)
[![GitHub license](https://img.shields.io/github/license/academicpages/academicpages.github.io?color=blue)](https://github.com/academicpages/academicpages.github.io/blob/master/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io)
[![GitHub forks](https://img.shields.io/github/forks/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/fork)
</div>
