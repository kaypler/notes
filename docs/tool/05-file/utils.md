# 常见文件操作

## 写入文件
```javascript
const writeToFile = (filePath, content) => {
  try {
    try {
      const stats = fs.statSync(filePath);

      if (stats) {
        fs.unlinkSync(filePath); 
      }
    } catch (e) {}

    fs.writeFileSync(filePath, content);
  } catch(err) {
    console.log('[writeToFile] error: ', err);
  }
}
```
## 追加内容
```javascript
const appendToFile = (filePath, contentToAppend) => {
  try {
    const stats = fs.statSync(filePath);

    if (stats) {
      fs.appendFileSync(filePath, contentToAppend); 
    }
  } catch (e) {
    fs.writeFileSync(filePath, contentToAppend);
  }
}

```

## 删除文件夹
```javascript
const deleteFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) return;

  fs.readdirSync(folderPath).forEach((file) => {
    const curPath = path.join(folderPath, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolder(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });

  fs.rmdirSync(folderPath);
}
```

## 创建文件夹
```javascript
const createFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    deleteFolder(folderPath);
  }

  fs.mkdirSync(folderPath, { recursive: true });
}  
```
