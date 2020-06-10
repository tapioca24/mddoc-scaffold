# mddoc-scaffold

> Markdown でドキュメントを書いて pdf を生成する雛形です。

## Installation

```sh
npm install
```

## Usage

### Generate TOC

以下のコマンドでドキュメントに目次をつけることができます。

```sh
npm run toc
```

デフォルトではファイルのトップに目次を挿入します。
md に以下のコードを書いておくことで挿入箇所を指定できます。

```html
<!-- START doctoc -->
<!-- END doctoc -->
```

詳細は [thlorenz/doctoc](https://github.com/thlorenz/doctoc) を参照ください。

### Generate PDF

以下のコマンドで `md` ディレクトリ内の md ファイルを pdf に変換し、`pdf` ディレクトリに生成します。

```sh
npm run pdf
```

pdf への変換には [BlueHatbRit/mdpdf](https://github.com/bluehatbrit/mdpdf) を使用しています。
