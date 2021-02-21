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