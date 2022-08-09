# 图片压缩

```js
export function reduceImage(src, dWidth, dHeight, ratio = 1.2) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = Math.min(img.width, dWidth * ratio);
      canvas.height = Math.min(img.height, dHeight * ratio);

      context.drawImage(
        img,
        0, 0, img.width, img.height,
        0, 0, canvas.width, canvas.height
      );

      resolve(canvas.toDataURL());
    };
    img.onerror = reject;
  });
}
```