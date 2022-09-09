# Git 备忘录

## 多账号配置
~/.ssh/config 文件添加以下内容：

```
Host github.com
  HostName github.com
  User ***.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/***

Host gitlab.com
  HostName gitlab.com
  User ***.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/***
```

手动添加密钥：`ssh-add -K ~/.ssh/id_github`

## 分支管理
1. 查看本地分支：`git branch`
2. 查看所有分支：`git branch -a | grep xxx`
3. 查看本地分支和远程分支关联信息：`git branch -vv`
4. 拉取远程分支：`git checkout -b xxx origin/xxx`
5. 推送远程分支： `git push --set-upstream origin xxx`
6. 本地分支与远程分支关联：`git branch --set-upstream-to=origin/xxx xxx`
7. 本地分支与远程分支: `git branch --unset-upstream`
8. 重命名分支：`git branch -m oldBranchName newBranchName`

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

## 取消合并
1. 取消正在合并的请求: `git merge --abort`
2. 取消已经合并的请求： `git revert -m 1 or 2 commitId`，1 代表保留本来的分支，2代表保留合并过来的分支