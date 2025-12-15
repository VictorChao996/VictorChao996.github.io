---
title: Obsidian 手機免費同步方案
outline: deep
createTime: 2025-12-15T00:00:00.000Z
tags:
  - Obsidian
permalink: /blogs/qoowfb4t/
---

# Obsidian 手機免費同步方案

## 前言
最近又開始用 Obsidian 來做數位筆記了, 先前其實一直都有嘗試使用, 但是因為沒有做數位筆記的習慣, 在棄用與重拾之間不斷地重複。直到近期讀了**打造第二大腦**這本書後, 才又升起對個人數位筆記的興趣, 並從建立 daily notes 習慣的方式,  培養 OB 的使用習慣。

仔細想想這應該是所有用過的時間段裡最長也是最認真的, 不只嘗試應用 PARA 概念, 搭配 daily notes & weekly review 的回饋系統 run 下來讓我有前所未有的感覺。 

然而隨著使用日漸頻繁, 原先只透過 iCloud 在 Mac 與 iPad 上的使用已經無法滿足我了。礙於手機是 Android 系統的關係, 外加我不想付費, 我只能另尋他法。

當時我的想法是, 手機瀏覽上最低能夠滿足**單向同步** (瀏覽最新的 OB 變更) 即可, 不用可以編輯並上傳。   

## 尋求方法
原先是想說現在 AI 工具這麼方便, 要不乾脆來 vibe coding 一個能夠解決同步問題的 app, 但在經過一番輾轉與考慮最 simple 的解法後, 決定採用 Git 來同步資訊。

使用 git 對於一般的工程師來說應該並不難, 不過當時有個點要考慮的是, 如何簡單實現？先前有用過類似的 git app, 但是大多都是需要手動 pull & push 任何的變更, 等於是在手機上使用 OB 之前, 都必須要多一個額外的步驟。

就在我向 chatGPT 詢問有沒有更簡單的方法時, 看到了一沒聽過的關鍵字：**Termux**

## 開始嘗試
### Termux
[Termux](https://play.google.com/store/apps/details?id=com.termux&hl=zh_TW), 一款終端模擬器 app, 基本上可以把它當作是在手機上運行 Linux 環境。有了這個 app, 我就能夠在 Android 手機上使用 linux 指令, 也就離 git clone 更近一步。

### Git clone
在 termux 中安裝 git 後, 下一步便是 clone 儲存 OB 檔案的 Repo (當然要事先設定好), 這邊遇到第一個關卡, private repo 是需要授權的。無論是透過 https 或是 ssh 的方式都要額外設定, 前者的密碼下要從 `settings > Developer Settings > Personal access tokens > Fine-grained tokens`設定取得; 後者則需要在 termux 中建立 ssh key, 並將其 public key 貼到 `settings > SSH and GPG keys` 中建立。

### 連結儲存空間
順利從 Github clone 下專案後遇到的第二個關卡是, 究竟要放在哪裡呢？Obsidian app 選擇手機資料夾的範圍是有限制的, 而其位置是 termux 存取不到的。

好在 termux 提供了虛擬指令 `termux-setup-storage`, 輸入之後便會跳手機權限設定, 開啟後便可以在 terminal 中看到 `storage` 目錄, 這時再放到旗下可以被 Obsidian 開啟的資料夾範圍即可 (ex. `/storage/shared`)。

clone 完成後, 透過 obsidian 開啟資料夾即可瀏覽文件, 就如在電腦上使用一樣, 令人振奮！ 

### 自動拉取更新？
現在下個問題是, 我要如何自動更新？總不能每次使用前都要打開 termux 輸入 `git pull` 吧？雖然有瞄到 chatGPT 建議的後續步驟是將其做成腳本並新增主畫面快捷按鈕, 但是我沒看到可以新增的按鈕啊喂。(補充：後來有找到了, 寫文的當下尚未發現)

就在我一籌莫展, 先去設定電腦 OB Vault git 之際, 偶然查到這個論壇提問 [Using Git to sync your Obsidian vault on Android devices](https://forum.obsidian.md/t/guide-using-git-to-sync-your-obsidian-vault-on-android-devices/41887/7), 看到這位名叫 Xtron135 的回答, 讓我決定試試是否真如其所說, 搭配 Git extension 後只需設置一遍, 後續就自動了。

### 錯誤提示
搗鼓一番後, 當我滿心期待打開 OB app 並執行 pull 指令時, 卻出現顯眼的提示訊息：**repo xxx using not found protocol ssh** 的字樣。後續判斷為 Obsidian Git 插件在執行 pull 時是依照 origin 設定來 pull/push, 與原先在 termux 上執行 git clone 時使用 ssh 的方法相同, 但 obsidian git 插件可能沒有 ssh 設定, 最終無法成功 pull。

於是我將上述步驟換成 https clone 重現, 並在 OB 手機 app 上額外設定 Git user.name & email & password (不知為何只有手機版有這個輸入選項, 電腦則沒) 。

這一次，當我再次打開 OB app 時, 真的如論壇大佬的回覆一樣, 手機同步成功了！
並且拜 Git extension 所賜, 原先在電腦上可透過插件執行的指令, 手機端也可以。
（包含最重要的, 自動同步功能！） 


## 後續試用
完成設置後我試用了下,  效果非常不錯。

其中有項設定是開啟 OB 後自動進行 pull, 開啟這選項後, 我便能每次打開手機時檢視到電腦上最新的更新; 相反地, 在手機上編輯的內容, 也能更新到電腦上, 最終實現真正的雙向同步。

後續我也嘗試了在平板上編輯 ,  雖然一樣會遇到 ssh error, 不過因為可以透過 iCloud 同步至 Macbook, 索性就直接關閉 iPad 上的 Git 功能了。（插件作者想的挺周到的, 還有出不會被同步的關閉插件設定選項）

> 註：在使用上會有盲點, 手機無法即時更新平板編輯的內容, 因為 iCloud 的資訊一定要透過 Macbook 上的插件 push 到遠端後才能被 pull 至手機。


## 結語
這次的設置還挺有趣的, 整體花了半天左右, 雖然這個同步方案可能還有缺陷, 但已經大大超出原本**單向同步**的期望。不僅如此, 使用 Git 也剛好滿足我一直想做的事情, 定期備份 Obsidian 的資料, 以備不時之需。

願這次的同步設置能助力數位筆記系統 (第二大腦) 的使用。