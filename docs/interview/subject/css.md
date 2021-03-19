# CSS题目

## 1.div水平垂直居中
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

## 2.移动端Retina屏1px像素问题
为了适配各种屏幕，我们写代码时一般使用设备独立像素来对页面进行布局。
而在设备像素比大于 1的屏幕上，我们写的 1px实际上是被多个物理像素渲染，这就会出现 1px在有些屏幕上看起来很粗的现象。

1. border-image
```css
.border_1px {
  border-bottom: 1px solid #000;
}
@media only screen and(-webkit-min-device-pixel-ratio:2) {
  .border_1px {
    border-bottom: none;
    border-width: 0 0 1px 0;
    border-image: url('../img/1pxline.png') 0 0 2 0 stretch;
  }
}
```
2. background-image
```css
.border_1px {
  border-bottom: 1px solid #000;
}
@media only screen and(-webkit-min-device-pixel-ratio:2) {
  .border_1px {
    background: url('../img/1pxline.png') repeat-x left bottom;
    background-size: 100% 1px;
  }
}
```
3. 伪类 + transform
基于 media查询判断不同的设备像素比对线条进行缩放：
```css
.border_1px:before {
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  width: 100px;
  background-color: #000;
  transform-origin: 50% 0;
}
@media only screen and(-webkit-min-device-pixel-ratio:2) {
  .border_1px:before {
    transform: scaleY(0.5);
  }
}
@media only screen and(-webkit-min-device-pixel-ratio:3) {
  .border_1px:before {
    transform: scaleY(0.33);
  }
}
```

## 3.实现表格单双行条纹样式
```css
tr:nth-child(2n) {
  background-color: red;
}
tr:nth-child(2n+1) {
  background-color: blue;
}
```

## 4.分析比较display: none、visibility: hidden、opacity: 0
|           | display: none | visibility: hidden | opacity: 0       |
| :-------- | :------------ | :----------------- | :--------------- |
| DOM 结构   | 不占空间       | 占空间             | 占空间          |
| 事件监听   | 不支持          | 不支持              | 支持             |
| 性能       | 重排          | 重绘                 | 合成层，不重绘     |
| 株连性      | 是           | 否                   | 是              |
| transition | 不支持        | 立即显示，隐藏时可以延时 | 可以延时显示和隐藏 |
| 场景       |  全局遮罩      |                     | 图片上传按钮      |
