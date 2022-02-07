# kanazawa.js community page
kanazawa.jsのコミュニティページのリポジトリです。

![kanazawa.js](./static/banner.png)

## :computer: 技術スタック
- フロントエンド
  - GatsbyJS (React)
- ホスティング
  - Github Pages

## :arrow_forward: 開発方法
1. 本リポジトリをクローンし、プロジェクトリポジトリに移動する。
2. `npm install`コマンドを使用し、依存パッケージのインストールを行う。
3. `npm run develop` コマンドを実行し、 [localhost:8000](http://localhost:8000/)でアプリケーションの表示確認を行う。
4. コードを変更する

```bash 
$ npm install
$ npm run develop
```

## :pencil2: 固定ページ編集方法
コミュニティ概要や行動規範のページを編集する場合は、 `content/pages/[slug]` 配下にある `index.mdx` を変更する。

[MDX](https://github.com/mdx-js/mdx)はマークダウン文書でJSX記法が利用できるフォーマット形式です。基本的にはマークダウンを書いて、ページを編集する形で問題ないです。

## :globe_with_meridians: URL設計
- `/` トップページ
- `/about` コミュニティ概要
- `/code-of-conduct` 行動規範
- `/blog` イベントレポート

## :rocket: デプロイ方法
開発中はGitHubのmasterにマージされるとGithub Pages自動的にデプロイされます。

## :ledger: ライセンス
MIT
