import { defineUserConfig, defaultTheme, } from 'vuepress';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JC 技术文档',
      description: 'JC 技术文档仓库',
    },
  },
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://oi-wiki.org/favicon.ico' }]],
  base: '/',
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
          { text: '账号 JC', link: '/account/', },
          // { text: '部署', link: '/install/', },
          // { text: '开发', link: '/dev/', },
          { text: 'GitHub 项目', link: 'https://github.com/jcer-team/jc-docs.git', },
        ],
      },
    },
    sidebar: {
      '/account/': [
        {
          text: '账号 JC 技术',
          collapsible: false,
          children: ['/account/level-1.md', '/account/level-2.md'],
        },
      ],
      '/': [''],
    },
  }),
  plugins: [
    shikiPlugin({}),
    searchPlugin({
      locales: {
        '/': { placeholder: '搜索', },
      },
      maxSuggestions: 10
    })
  ]
});