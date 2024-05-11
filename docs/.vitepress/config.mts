import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import * as defList from 'markdown-it-deflist'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "T8 Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Characters',
        collapsed: true,
        items: [
          { text: 'Leo', link: '/leo' },
          { text: 'Lili', link: '/lili' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(defList.default)
    }
  }
})
