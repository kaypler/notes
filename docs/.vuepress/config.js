module.exports = {
  title: 'Notes',
  descriptions: 'Use vue-press to build a knowledge base',
  base: '/notes/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'kaypler/notes',
    nav: [{
        text: '面试',
        link: '/interview/',
      }, {
        text: '工具库',
        link: '/tool/'
      }, {
        text: '算法',
        link: '/algorithm/'
    }],
    sidebarDepth: 1, // 提取到h2的标题
    sidebar: {
      '/interview/': [{
        title: '手写系列',
        collapsable: false,
        children: [
          'handwrite/promise'
        ]
      }],
      '/tool/': [{
        title: '基础',
        collapsable: false,
        children: []
      }, {
        title: '图片相关',
        collapsable: false,
        children: [
          'picture/lazy-load'
        ]
      }, {
        title: '文件操作',
        collapsable: false,
        children: [
          'file/axios',
          'file/wx2px'
        ]
      }],
      '/algorithm/': [{
        title: '排序和查找',
        collapsable: false,
        children: [
          'sort-and-search/sort',
          'sort-and-search/bisect',
        ]
      }, {
        title: '图相关',
        collapsable: false,
        children: [
          'graph/base',
          'graph/depth-first-search',
          'graph/topological',
          'graph/kosaraju',
        ]
      }, {
        title: 'Leecode',
        collapsable: false,
        children: [
          'leecode/longest-common-string',
          'leecode/matrix',
          'leecode/slide-window',
        ]
      }]
    }
  },
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }]
}
