/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhTwNavbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: '標籤', link: '/blog/tags/' },
  { text: '歸檔', link: '/blog/archives/' },
  {
    text: '筆記',
    items: [{ text: '示例', link: '/notes/README.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

