# 表格操作

## 解析表格
```js
import xlsx from 'xlsx';

// 把文件按照二进制读取
cosnt readFile = (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = ev => {
      resolve(ev.target.result);
    }
  });
}

readFile(file.raw).then((data) => {
  const workbook = xlsx.read(data, { type: 'binary' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  
  console.log(jsonData);
});

```

## 导出表格
```js
const userList = [
  { name: 'h1', phone: '123', address: 'ss' },
  { name: 'h2', phone: '12', address: 'dd' },
  { name: 'h3', phone: '1', address: 'gg' },
]

const tableData = userList.map((item) => ({
  '姓名': item.name,
  '联系方式': item.phone,
  '地址': item.typeName,
}));

const sheet = xlsx.utils.json_to_sheet(tableData);
const book = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(book, sheet, 'sheet1');
xlsx.writeFile(book, `用户表.xls`);
```