/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhTwNavbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  { text: 'Blog', link: '/blogs/' },
  { text: '文章標籤', link: '/blogs/tags/' },
  { text: '過往文章', link: '/blogs/archives/' },
  {
    text: '筆記',
    link: '/notes/',
    // items: [{ text: '示例', link: '/notes/' },
    // { text: '示例2', link: '/notes/foo.md' }
    // ]
  },
  { text: '關於', link: '/about/' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blogs/' },
  { text: 'Tags', link: '/en/blogs/tags/' },
  { text: 'Archives', link: '/en/blogs/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

