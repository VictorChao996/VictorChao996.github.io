---
prev:
  text: Back to Command
  link: command
next: false
title: git
createTime: 2024/10/17 12:07:14
permalink: /notes/zq0qq6es/
---

# Git
紀錄一些常用的 git 指令

## config
git 相關設置
```bash
git config --list

git config user.name "Your Name"
git config user.email your-email@gmail.com

git config --global
git config --local //當前 git repo 設定

```

## Basic usage

```bash
git init
git add .
git commit -m "commit-message"

```

## Remote
```bash
git remote -v
git remote add <name> <remote-url>

git push 
git pull

git clone
```

## Branch
```bash
git branch -v
git checkout -b "new-branch"
git checkout <branch>

git merge <branch> //合併分支<branch>到當前分支
git rebase <branch> //將當前分支的基準定義為 <branch>
```

## Reset
取消 commit 用
```bash
git reset HEAD^ 

git reset HEAD^ --soft //保留 git add 紀錄, 保留檔案
git reset HEAD~2 --mixed //去除 git add 紀錄, 保留檔案
git reset <commit> --hard //去除 git add 紀錄 並 清除檔案
```
> 被 reset --hard 清除的檔案跟 commit 紀錄可以透過 reflog 找到歷史 commit 紀錄並救回

## Log
```bash
git log
git log --oneline //簡化 log 檢視

git reflog //檢視曾有的 commit, 可用於救回 reset --hard 移除的 commit紀錄
```