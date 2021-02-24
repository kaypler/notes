# axios上传下载文件

## 上传文件
```js
import axios from 'axios'
const http = axios.create({
  baseURL: 'xxx.com',
  timeout: 5000
});

/**
 * 上传源文件
 * @param {String} param1 
 * @param {String} param2 
 * @param {File} file 
 */
export const uploadSource = (param1, param2, file) => {
  const formData = new FormData();
  formData.append('file', file);
  return http.post(`/xxx?param1=${param1}&param2=${param2}`, formData, {
    headers: {'Content-type': 'multipart/form-data'}
  });
}
```

## 下载文件
```js
/**
 * 下载文件
 * @param {String} id  文件id
 */
export const downUploadResult = (id) => {
  return axios({
    method: 'get',
    url: `${baseURL}/xxx?id=${id}`,
    responseType: 'blob'
  }).then(res => {
    const filename = decodeURI(res.headers['content-disposition'].replace(/attachment;filename=(.+)$/g,'$1'));
    download(filename, res.data);
  });
}

function download (filename: string, file: Blob) {
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(file, filename)
  } else {
    const link = document.createElement('a')
    link.download = filename
    link.href = window.URL.createObjectURL(file)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }
}
```

::: warning 无法读取content-disposition的问题
后端要加上：`response.setHeader("Access-Control-Expose-Headers", "Content-Disposition")`。
:::

根据MDN文档：[Access-Control-Expose-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
默认情况下，只有七种 simple response headers （简单响应首部）可以暴露给外部：
+ Cache-Control
+ Content-Language
+ Content-Length
+ Content-Type
+ Expires
+ Last-Modified
+ Pragma

如果想要让客户端可以访问到其他的首部信息，可以将它们在`Access-Control-Expose-Headers`里面列出来。

::: details 处理后端抛出的错误
```js
 // 如果返回的是json数据，则是报错信息
if (res.data.type === 'application/json') {
  const reader = new FileReader();
  reader.onload = (event) => {
    reject(JSON.parse(reader.result));
  }
  reader.readAsText(res.data);
}
```
:::