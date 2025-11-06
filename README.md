# my-personal-site
- [my-personal-site](#my-personal-site)
  - [Install](#install)
  - [Usage](#usage)
  - [Notes](#notes)
    - [專案架構](#專案架構)
      - [專案重要結構與檔案](#專案重要結構與檔案)
      - [文章分類](#文章分類)
      - [特殊設定](#特殊設定)
    - [文章屬性](#文章屬性)
    - [內容新增流程](#內容新增流程)
    - [部署流程](#部署流程)
      - [GitHub Actions \& Pages 額外設定](#github-actions--pages-額外設定)
  - [References](#references)


網站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 建置生成。

## Install

1. Clone

```sh
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>
```
2. Install dependencies
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

## Notes

### 專案架構
#### 專案重要結構與檔案

- `docs/`：網站內容目錄
  - `blogs/`：部落格文章目錄 （可改名）
  - `notes/`：Document 文章目錄 （需與 `collections.ts` 中的 dir 對應）
  - `.vuepress/`：vuepress 配置目錄
    - `config.ts`：網站配置文件
    - `collections.ts`：自定義內容集合配置文件 （文章類別）
    - `plume.config.ts`：plume 主題配置文件
    - `navbar.ts`：導航欄配置文件
    - `public/`：靜態資源目錄 （圖片等）
    - `dist/`：生產包目錄 （建置後生成）

#### 文章分類
網站內容可分為多個分類，主要透過 `collections.ts` 進行配置。每個分類對應 `docs/` 目錄下的一個子目錄，並可自定義路徑、標籤等屬性。預設透過資料夾名稱作為分類。

#### 特殊設定
- 暫時註解掉 `config.ts` 中 `locales` 的 en 配置。



### 文章屬性
文章可透過 Front Matter 定義多種屬性，如標題、日期、標籤等。這些屬性可用於文章列表的篩選與排序。
更多屬性設定參考：[Plume - 可用屬性](https://theme-plume.vuejs.press/guide/collection/post/#%E5%8F%AF%E7%94%A8%E5%B1%9E%E6%80%A7)
ex.
```
---
title: 文章標題
createTime: 2024-06-01 12:00:00
tags:
  - 標籤1
  - 標籤2
permalink: /blogs/自定義永久路徑/ (可自動生成)
cover: /img/封面圖片路徑 (可選)
draft: false (是否為草稿，預設 false)
---
```

### 內容新增流程
1. 在 `docs/blogs/` 或 `docs/notes/` 目錄下新增 Markdown 檔案 （指定資料夾分類中）。
2. 在同層級資料夾的 `img/` 目錄下新增相關圖片資源。
3. 在 Markdown 檔案中引用圖片時，使用相對路徑，例如 `![圖片描述](./img/圖片檔名.png)`。
4. 新增 front matter 以設定[文章屬性](#文章屬性)。
5. 執行 `npm run docs:dev` 進行本地預覽 (此步驟會主動產生 permalink) 並確認文章內文 & 連結資源皆無誤。
6. 提交並推送代碼到遠端倉庫。


### 部署流程
1. 直接 commit 並 push 代碼到主分支或是執行 `deploy.sh` 腳本來提交建置後的檔案到 `main` 分支。
2. GitHub Actions 會自動觸發部署流程，將 `gh-pages` 分支的內容部署到 GitHub Pages。

#### GitHub Actions & Pages 額外設定

主題已建立 github actions: `.github/workflows/docs-deploy.yml`，你還需要在 github 倉庫中進行以下設定：

- [ ] `settings > Actions > General`，拉到頁面底部，在 `Workflow permissions` 下，勾選 `Read and write permissions`，並點擊儲存按鈕

- [ ] `settings > Pages`, 在 `Build and deployment` 中，`Source` 選擇 `Deploy from a branch`, `Branch` 選擇 `gh-pages`，並點擊儲存按鈕
  (首次建立可能沒有 `gh-pages`分支，你可以先完成上面的設定後，推送一次程式碼到主分支，等待 `github actions` 完成後再進行設定)

- [ ] 修改 `docs/.vuepress/config.ts` 中的 `base` 選項：
  - 如果你準備發佈到 `https://<USERNAME>.github.io/` ，你可以省略這一步，因為 `base` 預設就是 `"/"` 。
  - 如果你準備發佈到 `https://<USERNAME>.github.io/<REPO>/` ，也就是說你的倉庫地址是 `https://github.com/<USERNAME>/<REPO>` ，則將 `base` 設定為 `"/<REPO>/"`。

如需要自訂網域，請查看 [Github Pages 文件](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## References

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
