# 本地环境与 GitHub Pages 部署

本项目使用 Ruby 3.3、Bundler、Jekyll 和 GitHub Pages。现有 JavaScript 已编译，日常修改内容和构建无需 Node.js。

## 本地使用

在本项目目录运行：

```sh
sh scripts/site setup  # 首次安装或依赖变化时运行
sh scripts/site serve  # 预览 http://127.0.0.1:4000
sh scripts/site build  # 生产构建，输出至 _site/
```

按 Ctrl+C 停止预览。修改 `_config.yml` 后需重启预览。
脚本会自动选择 Homebrew 安装的 Ruby 3.3，不需要修改 shell 配置。
依赖放在 `vendor/bundle`，版本记录在 `Gemfile.lock`；应提交 lockfile。

## 部署到自己的 GitHub

1. 远程仓库已配置为 `https://github.com/Endyiscoding/Zhao-Yidi.github.io.git`，默认分支为 `master`。
2. 后续更新可运行：

   ```sh
   git add .
   git commit -m "Update Yidi Zhao homepage"
   git push origin master
   ```

3. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 在 **Actions** 中运行 `Deploy Jekyll to GitHub Pages`，或再次推送 `master`/`main` 分支触发部署。
5. 工作流成功后，在 Pages 设置或部署任务中查看网站地址。

工作流使用与本地相同的 Ruby 版本和 lockfile，并自动从目标仓库读取部署用的 `url`、`baseurl` 和 `repository`，支持个人主页仓库及普通项目仓库。
`_config.yml` 已设置为该仓库对应的地址：https://endyiscoding.github.io/Zhao-Yidi.github.io/。

页面已根据 Yidi Zhao 的 CV 替换。GitHub Actions 会自动设置部署时的站点地址。

参考：[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
