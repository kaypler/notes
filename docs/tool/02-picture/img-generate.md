# 图片生成

生成一张透明的图片
```js
function createCanvasURL(width, height) {
    const canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d', {
        alpha: true,
        desynchronized: true,
        colorSpace: 'srgb',
    });

    ctx.fillStyle = '#00000000';
    ctx.rect(0, 0, width, height);
    ctx.fill();

    return canvas.toDataURL('image/png', 0.1);
}


function download() {
    const width = 280;
    const height = 120;
    const url = createCanvasURL(width, height);
    const link = document.createElement('a');
    link.download = `${width}*${height}.png`;
    link.href = url;
    link.click();
    link.remove();
}
```