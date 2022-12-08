# tsukutte_manabu_nextjs_react

「[作って学ぶ Next.js/React Web サイト構築](https://amzn.to/3VkHD97)」の写経

- 本の情報
  - ソース
    - [ebisucom/next-react-website](https://github.com/ebisucom/next-react-website/)
  - サポートサイト
    - [https://book.mynavi.jp/supportsite/detail/9784839980177.html](https://book.mynavi.jp/supportsite/detail/9784839980177.html)
  - その他
    - 本では Next.js のバージョンは 12 だが、github に 13 用のコーディングの書き方や、12 から 13 へのアップグレードツールの紹介をしている。

# バージョン

- この github レポジトリのバージョン
  - ```
    $ npm list
    blog@0.1.0
    ├── eslint-config-next@13.0.4
    ├── eslint-config-prettier@8.5.0
    ├── eslint@8.28.0
    ├── next@13.0.4
    ├── react-dom@18.2.0
    └── react@18.2.0
    ```
- 本のバージョン(package.json より)
  - ```
    "dependencies": {
      "@fortawesome/fontawesome-svg-core": "^6.1.1",
      "@fortawesome/free-brands-svg-icons": "^6.1.1",
      "@fortawesome/free-regular-svg-icons": "^6.1.1",
      "@fortawesome/free-solid-svg-icons": "^6.1.1",
      "@fortawesome/react-fontawesome": "^0.1.18",
      "date-fns": "^2.28.0",
      "html-react-parser": "^2.0.0",
      "html-to-text": "^8.2.0",
      "microcms-js-sdk": "^2.0.0",
      "next": "12.2.0",
      "plaiceholder": "^2.4.0",
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "sharp": "^0.30.7"
    },
    "devDependencies": {
      "eslint": "8.18.0",
      "eslint-config-next": "12.2.0"
    }
    ```

# 使ったものや知ったことのメモ

## [microCMS](https://microcms.io/)

- CMS とは
  - Contents Management System
  - Web サイトのコンテンツを構成するテキストや画像、デザイン・レイアウト情報（テンプレート）などを一元的に保存・管理するシステム。
  - スラッグとは
    - ページを識別する URL の一部
    - 分類を URL で表現するようなもの

## JavaScript 関数

### [Array.prototype.map()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- 配列の全要素に対して、同じ編集を施した結果の、同じ要素数の配列を返す関数。

## CSS

### Bootstrap class=[sr-only](https://getbootstrap.jp/docs/4.2/utilities/screenreaders/)

- スクリーンリーダーを除くすべてのデバイスで要素を非表示できる。
  - スクリーンリーダーとは、コンピューターの画面読み上げソフト。

# 関連リンク

- [Next.js create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
