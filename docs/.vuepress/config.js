module.exports = {
  title: 'Notes',
  descriptions: 'Use vue-press to build a knowledge base',
  base: '/notes/',
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
    sidebarDepth: 3,
    sidebar: {
      '/interview/': [{
        title: '手写系列',
        collapsable: false,
        children: [
          'handwrite/promise'
        ]
      }],
      '/tool/': [{
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
          'leecode/slide-window',
        ]
      }]
    }
  }
}
