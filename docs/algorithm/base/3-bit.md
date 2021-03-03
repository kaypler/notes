# 位运算

## 2的整数次幂
如果正整数y是2的整数次幂，则y的二进制表示中只有最高位是1，其余都是0，因此`y&(y-1)=0`。

## 枚举子集
将单词转化成二进制表示的数
```js
// 枚举子集方法一
for (let choose = 0; choose < (1 << word.length); ++choose) {
    let mask = 0;
    for (let i = 0; i < word.length; ++i) {
        if (choose & (1 << i)) {
            // 转为26位二进制表示的哈希值 
            mask |= (1 << (word[i].charCodeAt() - 'a'.charCodeAt()));
        }
    }
}

// 枚举子集方法二
let mask = 0;
for (let i = 0; i < word.length; ++i) {
    mask |= (1 << (word[i].charCodeAt() - 'a'.charCodeAt()));
}
let subset = mask;
while (subset) {
    subset = (subset - 1) & mask;
}
```