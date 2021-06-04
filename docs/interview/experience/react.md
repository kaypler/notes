# React

## shallowEqual的流程
- 第一步，直接通过 === 判断是否相等，如果相等，那么返回true。正常情况只要调用 React.createElement 会重新创建props，props都是不相等的。
- 第二步，如果新老props有一个不为对象，或者不存在，那么直接返回false。
- 第三步，判断新老props，key组成的数组数量等不想等，说明props有增加或者减少，那么直接返回false。
- 第四步，遍历老的props ,发现新的props没有与之对应，或者新老props不同等,那么返回false。
- 默认返回true。

## Hook的动机
1. Hook使你在无需修改组件结构的情况下复用状态逻辑。
2. Hook将组件中相互关联的部分拆分成更小的函数。
3. Hook使你在非class的情况下可以使用更多的React特性。