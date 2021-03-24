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

## 异或
异或运算有以下三个性质：

1. 任何数和 0 做异或运算，结果仍然是原来的数，即 `a ⊕ 0 = a`。
2. 任何数和其自身做异或运算，结果是 0，即 a ⊕ a = 0。
3. 异或运算满足交换律和结合律，即 a ⊕ b ⊕ a = b ⊕ a ⊕ a = b ⊕ (a ⊕ a) = b ⊕ 0 = b。
