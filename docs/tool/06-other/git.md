# Git 备忘录

## 撤销修改
1. 撤销工作区：`git checkout --filename` 或 `git checkout .`
2. 撤销暂存区: `git reset HEAD filename` 或 `git reset HEAD`·
3. 撤销版本库：`git reset --hard HEAD^` 或 `git reset --hard commitId`

git 的三个区域：
- **Working Tree**：当前的工作区域
- **Index/Stage**：暂存区域，和git stash命令暂存的地方不一样。使用git add xx，就可以将xx添加近Stage里面
- **Repository** 提交的历史，即使用git commit提交后的结果

reset 的三种模式：
- **hard**：重置 HEAD 和branch的同时，重置stage区和工作目录里的内容。
- **soft**：重置 HEAD 和 branch 时，保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区。
- **mixed**：重置 HEAD 和branch的同时，保留工作目录，并清空暂存区。不加参数默认使用这个模式。