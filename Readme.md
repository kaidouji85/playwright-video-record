# playwrightのテストを録画するサンプル

このリポジトリは[playwright](https://playwright.dev/#) のテスト過程を録画するサンプルです。

## 事前準備
node.js(v12.16.1)以上をインストールしてください。

## 動かし方
### 初回
```
cd <本リポジトリをcloneした場所>
npm ci
npm start
# ブラウザが起動してテストがはじまる
# videosフォルダ配下に動画ファイルが作られる
```

### 2回目以降
```
cd <本リポジトリをcloneした場所>
npm start
```