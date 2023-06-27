# vite frontEndDevEnvironment

## what this can do
- HTMLをEjs風に記載
- Sassコンパイル
- Jsバンドル

# Quick Start
* npmのインストール
   * `npm install`
* 開発サーバーの立ち上げ
  * `npm run dev`
* ファイルのビルド
  * `npm run build`

# 変数の出力、コンポーネントの読み込み
プロパティの出力: {{プロパティ名}}
[出力など基本構文のリファレンス](https://handlebarsjs.com/guide/expressions.html)

コンポーネントの呼び出し: {{> ファイル名（拡張子なし）}}
[コンポーネントのリファレンス](https://handlebarsjs.com/guide/partials.html#basic-partials)

条件分岐: {{#if hoge}} {{else}} {{/if}}
[if文のリファレンス](https://handlebarsjs.com/guide/builtin-helpers.html#if)

コメントアウト: {{!コメント}}
[コメントアウトのリファレンス](https://handlebarsjs.com/guide/#template-comments)

