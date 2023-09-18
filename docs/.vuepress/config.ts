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
  base: '/wordle-docs/',
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
          // { text: '使用', link: '/', },
          // { text: '部署', link: '/install/', },
          // { text: '开发', link: '/dev/', },
          { text: 'GitHub 项目', link: 'https://github.com/jcer-team/jc-docs.git', },
        ],
      },
    }
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