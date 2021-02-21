# wx和px的换算

```js
const path = require('path');
const fs = require('fs');
const os = require('os');
const readline = require('readline');

const reg = /(\d+(\.\d)?)wx/i;
const entryPath = path.resolve(__dirname, './src');
const includeFiles = ['asset', 'component', 'component-butler', 'component-community', 'demo', 'pages'];
const FILE_TYPES = ['.vue', '.css'];

function walk() {
    fs.readdirSync(entryPath)
        .forEach(file => {
            var fileStr = includeFiles.join(",") + ",";
            if (fileStr.indexOf(file + ",") != -1) {
                runWalk(file)
            }
        });
}

function runWalk(dir) {
    let directory = path.join(entryPath, dir);
    fs.readdirSync(directory)
        .forEach(file => {
            let fullpath = path.join(directory, file)
            let stat = fs.statSync(fullpath)
            let extname = path.extname(fullpath)
            if (stat.isFile() && FILE_TYPES.includes(extname)) {
                let fRead = fs.createReadStream(fullpath);
                let objReadline = readline.createInterface({
                    input:fRead
                });
                let bufferArr = [];


                objReadline.on('line',function (line) {
                    let result;
                    while ((result = reg.exec(line)) != null) {
                        let num = parseFloat(result[1]);                        
                        line = line.replace(reg, parseInt(num*2)+'px');
                    }

                    bufferArr.push(line);
                });
                objReadline.on('close',function () {
                   fs.unlinkSync(fullpath);

                   let fWrite = fs.createWriteStream(fullpath);
                   bufferArr.forEach(item => {
                        fWrite.write(item + os.EOL);
                   }); 
                });

            } else if (stat.isDirectory()) {
                let subdir = path.join(dir, file)
                runWalk(subdir)
            }
        })
}

walk();
```