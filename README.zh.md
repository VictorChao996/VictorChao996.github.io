# my-vuepress-site

網站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 建置生成。

## Install

```sh
npm i
```

## Usage

```sh
# 啟動開發服務
npm run docs:dev
# 建置生產包
npm run docs:build
# 本地預覽生產服務
npm run docs:preview
# 更新 vuepress 和主題
npm run vp-update
```

## 部署到 GitHub Pages

主題已建立 github actions: `.github/workflows/docs-deploy.yml`，你還需要在 github 倉庫中進行以下設定：

- [ ] `settings > Actions > General`，拉到頁面底部，在 `Workflow permissions` 下，勾選 `Read and write permissions`，並點擊儲存按鈕

- [ ] `settings > Pages`, 在 `Build and deployment` 中，`Source` 選擇 `Deploy from a branch`, `Branch` 選擇 `gh-pages`，並點擊儲存按鈕
  (首次建立可能沒有 `gh-pages`分支，你可以先完成上面的設定後，推送一次程式碼到主分支，等待 `github actions` 完成後再進行設定)

- [ ] 修改 `docs/.vuepress/config.ts` 中的 `base` 選項：
  - 如果你準備發佈到 `https://<USERNAME>.github.io/` ，你可以省略這一步，因為 `base` 預設就是 `"/"` 。
  - 如果你準備發佈到 `https://<USERNAME>.github.io/<REPO>/` ，也就是說你的倉庫地址是 `https://github.com/<USERNAME>/<REPO>` ，則將 `base` 設定為 `"/<REPO>/"`。

如需要自訂網域，請查看 [Github Pages 文件](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 文件

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
