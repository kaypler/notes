# 回文

## 5.最长回文子串
`中等`给你一个字符串 s，找到 s 中最长的回文子串。[详细](https://leetcode-cn.com/problems/longest-palindromic-substring/)

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let ans = '';
    for (let l = 0; l < n; ++l) {
        for (let i = 0; i+l < n; ++i) {
            let j = i + l;
            if (l == 0) {
                dp[i][j] = true;
            } else if (l == 1) {
                dp[i][j] = (s.charAt(i) == s.charAt(j));
            } else {
                dp[i][j] = (s.charAt(i) == s.charAt(j) && dp[i+1][j-1]);
            }

            if (dp[i][j] && l+1 > ans.length) {
                ans = s.substring(i, i + l + 1);
            }
        }
    }
    return ans;
};
```