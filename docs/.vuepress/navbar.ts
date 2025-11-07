/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhTwNavbar = defineNavbarConfig([
  { text: '首頁', link: '/', icon: 'material-symbols:home-rounded' },
  { text: 'Blog', link: '/blogs/', icon: 'material-symbols:article-rounded' },
  { text: '文章標籤', link: '/blogs/tags/', icon: 'material-symbols:label-rounded' },
  { text: '過往文章', link: '/blogs/archives/', icon: 'material-symbols:archive-rounded' },
  {
    text: '筆記',
    link: '/notes/',
    icon: 'material-symbols:note-rounded',
    // items: [{ text: '示例', link: '/notes/' },
    // { text: '示例2', link: '/notes/foo.md' }
    // ]
  },
  { text: '關於', link: '/about/', icon: 'material-symbols:info-rounded' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/', icon: 'material-symbols:home-rounded' },
  { text: 'Blog', link: '/en/blogs/', icon: 'material-symbols:article-rounded' },
  { text: 'Tags', link: '/en/blogs/tags/', icon: 'material-symbols:label-rounded' },
  { text: 'Archives', link: '/en/blogs/archives/', icon: 'material-symbols:archive-rounded' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md', icon: 'material-symbols:note-rounded' }]
  },
])

