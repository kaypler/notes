# 下载图片

```ts
const getFileName = (url: string): string => {
  const reg = /(?<!\/)\/([a-zA-Z0-9_-]*?)[?|.]/;
  const matches = url.match(reg);
  return matches && matches[1];
};

const convertImgUrl = (url: string): Promise<string> => {
  return new Promise(resolve => {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);

      const dataUrl = canvas.toDataURL('image/png');
      resolve(dataUrl);
    };
    image.src = url;
  });
};

const download = (url: string, fileName?: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || getFileName(url);
  a.target = '_blank';
  a.click();
};

// use
convertImgUrl('https://images.unsplash.com/photo-1612564148954-59545876eaa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80').then(dataUrl => {
    download(dataUrl, fileName);
});
```