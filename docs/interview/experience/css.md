# CSS

## 1. div水平垂直居中
```css
/* 方法一 */
element.style {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 500px;
  background: yellow;
  z-index: 1;
  transform: translate3d(-50%,-50%,0);
}
/* 方法二 */
div.parent {
  display: table;
}
div.child {
  display: table-cell
  vertical-align: middle;
  text-align: center;
}
/* 方法三 */
div.parent{
  display:flex;
}
div.child{
  margin:auto;
}
```

## 2. 分析比较display: none、visibility: hidden、opacity: 0
|           | display: none | visibility: hidden | opacity: 0       |
| :-------- | :------------ | :----------------- | :--------------- |
| DOM 结构   | 不占空间       | 占空间             | 占空间          |
| 事件监听   | 不支持          | 不支持              | 支持             |
| 性能       | 重排          | 重绘                 | 合成层，不重绘     |
| 株连性      | 是           | 否                   | 是              |
| transition | 不支持        | 立即显示，隐藏时可以延时 | 可以延时显示和隐藏 |
| 场景       |  全局遮罩      |                     | 图片上传按钮      |

## 3. 移动端Retina屏1px像素问题
1. 伪元素 + transform scaleY(.5) 
2. border-image 
3. background-image 
4. box-shadow

## 4.实现表格单双行条纹样式
```css
tr:nth-child(2n) {
  background-color: red;
}
tr:nth-child(2n+1) {
  background-color: blue;
}
```
