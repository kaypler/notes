const { existsSync, readdirSync, statSync } = require('fs');
const { extname, join } = require('path');

const options = {
  'algorithm': {
    title: '算法',
    groups: [
      { title: '基础', path: '1-base' },
      { title: '图', path: '2-graph' },
      { title: '字符串', path: '3-string' },
      { title: 'LeeCode', path: '4-leecode' }
    ]
  },
  'animation': {
    title: '动画',
    groups: [
      { title: '基础', path: 'base' },
    ]
  },
  'article': {
    title: '文章',
    groups: [
      { title: 'dev', path: 'dev' },
      { title: 'vscode', path: 'vscode' },
      { title: 'react', path: 'react' },
      { title: 'web', path: 'web' },
      { title: 'ai', path: 'ai' },
    ]
  },
  'interview': {
    title: '面试',
    groups: [
      { title: '经验之谈', path: 'experience' },
      { title: '大厂真题', path: 'subject' },
      { title: '手写系列', path: 'handwrite' },
      { title: '性能调优', path: 'optimize' },
    ]
  },
  'tool': {
    title: '工具库',
    groups: [
      { title: '基础', path: '01-base' },
      { title: '图片', path: '02-picture' },
      { title: 'CSS', path: '03-css' },
      { title: 'Hook', path: '04-hook' },
      { title: '文件', path: '05-file' },
      { title: '进阶', path: '06-advanced' },
      { title: '开源库', path: '07-source' },
      { title: '其它', path: '08-other' },
    ]
  }
}

const topPath = join(process.cwd(), 'docs');
const routes = getRoutes(topPath);

function getDocs(root) {
  if (!existsSync(root)) return [];
  return readdirSync(root).filter(file => {
    return statSync(join(root, file)).isDirectory() && file.charAt(0) !== '.';
  })
}

function getRoutes(root) {
  const docs = getDocs(root);
  const routes = docs.reduce((obj, doc) => {
    if (options[doc]) {
      obj[`/${doc}/`] = generateRoutes(join(root, doc), options[doc].groups);
    }
    return obj;
  }, Object.create(null));
  return routes;
}

function generateRoutes(path, groups) {
  return readdirSync(path)
    .filter(file => statSync(join(path, file)).isDirectory())
    .map(dir => {
      const config = groups.find(g => g.path === dir);
      return {
        title: config.title,
        collapsable: false,
        children: readdirSync(join(path, dir))
          .filter(file => extname(file) === '.md')
          .map(file => `${dir}/${file}`)
      }
    })
}

function getNavs() {
  return Object.keys(options).map(key => {
    return {
      text: options[key].title,
      link: `/${key}/`
    }
  })
}

module.exports = {
  navs: getNavs(),
  routes
};