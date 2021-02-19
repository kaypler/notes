module.exports = {
  title: 'Notes',
  descriptions: 'Use vue-press to build a knowledge base',
  base: '/notes/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: {
      '/interview/': [{
        title: '面试',
        children: [
          ''
        ]
      }],
      '/tool/': [{
        title: '工具函数',
        children: [
          '',
          'wx2px'
        ]
      }],
      '/algorithm/': [{
        title: '算法',
        children: [
          '',
          'bisect',
          'slide-window',
          'sort',
        ]
      }]
    }
  }
}
