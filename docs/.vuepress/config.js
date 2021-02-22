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
        children: [
          'handwrite/promise'
        ]
      }],
      '/tool/': [{
        title: '文件操作',
        children: [
          'file/axios',
          'file/wx2px'
        ]
      }],
      '/algorithm/': [{
        title: '算法',
        children: [
          '',
          'bisect',
          'longest-common-string.md',
          'slide-window',
          'sort',
        ]
      }]
    }
  }
}
