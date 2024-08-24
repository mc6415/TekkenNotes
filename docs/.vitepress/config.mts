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
          { text: 'Nina', link: '/nina' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-70J5YRH01M'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-70J5YRH01M');`
    ]
  ],
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(defList.default)
    }
  }
})
