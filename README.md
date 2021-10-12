# Integration Test、いいぞ

[#14 【オンライン開催】FukuokaJS - connpass](https://fukuokajs.connpass.com/event/225489/)

## 自己紹介

- @pirosikick
  - https://twitter.com/pirosikick
- 株式会社 Zene CTO
- エンジニア募集中！
  - https://www.wantedly.com/companies/company_6418169/projects

## 今日の話

- Testing Trophy の Integration Test(というか、@testing-library/react)、いいぞ！という話
- あんまり Integration Test の話をする人が巷に居ない気がしたので、いいぞ！と言いにきました。
- 巷に溢れている & そんなこと言わなくてもみんなそう思っている場合は、休憩時間としてお使いください

## Integration Test とは？

- 広義では「結合テスト」
- 狭義（というか今日の発表のスコープ）では、Testing Trophy の Integration Test
  - [Testing JavaScript with Kent C. Dodds https://testingjavascript.com/](https://testingjavascript.com/)
  - 2018 年頃に Kent C. Dodds が提唱した概念。割と浸透している？
  - テストピラミッドとは違って、Unit test より Static test・Integration test のボリュームを増やそうという図
- E2E と違って、API などはモックしてテストする
- 自分は Jest + jsdom + @testing-library/react でよく書きます

### 例: Jest + jsdom + @testing-library/react

```ts
/**
 * @jest-environment jsdom
 */
import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// アプリケーションのルートコンポーネント
import { HogeApp } from "./HogeApp";

beforeEach(async () => {
  // jsdomに描画
  screen.render(<HogeApp />);

	// 何か待つ時に使う（後述）
  await waitFor(() => { … });
});

test("…", () => {
  // 要素の取得
  const submitButton = screen.getByRole("button", { name: "送信する" });

  // 描画された内容を検証する（後述）
  …
});
```

### 要素の取得

- https://testing-library.com/docs/react-testing-library/cheatsheet

#### get/query/find, getAll/queryAll/findAll

```ts
/* 要素がなかった時にエラーを返す or null */
getByRole("button", { name: "…" }); // throw an error
queryByRole("button", { name: "…" }); // null

/* 要素が複数ある時にエラーを返す or 全部取得 */
// throw an error
getByRole("button", { name: "…" }); // throw an error
queryByRole("button", { name: "…" }); // throw an error
// マッチする要素をすべて返す
getAllByRole("button", { name: "…" });
queryAllByRole("button", { name: "…" });

/* 同期 */
getByRole("button", { name: "…" });
queryByRole("button", { name: "…" });

/* 非同期(要素が現れるまで待つ) */
await findByRole("button", { name: "…" });
```

#### By\*

- 何を元に要素を探すか
  - ByLabelText, ByPlaceholderText, ByText, ByDisplayValue, ByAltText, ByTitle, ByRole, ByTestId

```ts
// "送信する"ボタンを取得
getByRole("button", { name: "送信する" });
```

### 描画された内容を検証する

便利な Jest のカスタムマッチャーを提供している[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)は必須。

```ts
import "@testing-library/jest-dom";

// 表示・非表示
expect(dom).toBeVisible();
expect(dom).not.toBeVisible();

// 活性・非活性
expect(button).toBeEnabled();
expect(button).toBeDisabled();

// 他にも色々あるよ
```

### API のモック

@testinng-library/react の[Example](https://testing-library.com/docs/react-testing-library/example-intro)で紹介されているのは、[msw](https://www.npmjs.com/package/msw)。

```ts
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

自分の場合は、API 呼び出し等を関数化して、その関数をモックするのが好み。

```ts
import { fetchSomeData } from "./fetchSomeData";

jest.mock("./fetchSomeData");
const fetchSomeDataMock = fetchSomeData as jest.Mock;
beforeEach(() => {
  fetchSomeDataMock.mockClear();
});

beforeEach(async () => {
  fetchSomeDataMock.mockResolvedValue({ … });

  screen.render(<HogeApp />);

  await waitFor(() => {
    expect(fetchSomeDataMock).toHaveBeenCalled();
  });
});

test("calls fetchSomeData correctly", () => {
  // 回数
  expect(fetchSomeDataMock).toHaveBeenCalledTimes(1);
  // 引数
  expect(fetchSomeDataMock).toHaveBeenCalledWith(…);
});
```

## Integration Test のいいところ

1. セットアップが楽
1. リファクタが捗る
1. 安定したテストが書ける
1. a11y についてちょっと考える機会が発生する

ほとんど、@testing-library/\*がよくできているぞという話な気がするが。

### 1. セットアップが楽

jest, @testing-library/react, @testing-library/jest-dom をインストールするだけ。

```console
$ npm install -D \
	jest \
	@testing-library/react \
	@testing-library/jest-dom
```

CI 上でも問題なく動く

### 2. リファクタが捗る

- 一般的には E2E より実行時間が短いので、<br/>
  レッド・グリーン・リファクタリングが回しやすい
- @testing-library/\*がよくできており、<br/>
  テストが実装依存になりにくく、リファクタでテストが壊れることが少ない

### 3. 安定したテストが書ける

#### 3.1 `waitFor`で待つ

```ts
// モックが呼ばれるのを待つ
await waitFor(() => {
  expect(mock).toHaveBeenCalled();
});

// 要素が出現するのを待つ
await waitFor(() => {
  screen.getByRole("button", { name: "…" });
});

// 要素が出現するのを待つ その2
await screen.findByRole("button", { name: "…" });
```

#### 3.2 DOM 上の構造を変更しても大丈夫

- getByRole や getByText など、DOM の構造に依存しないテストが書けるので、
  リファクタでコンポーネントを弄りまくってもテストが壊れにくい

### 4. a11y についてちょっと意識する機会が発生する

- テストを安定させるには、なるべく getByRole で要素を取得したいという動機が働く
- そのためにはセマンティックな DOM 構造が必要
- 「〜は a11y 的にはどうコーディングするのがいいのかな？調べてみるか」となる

## 最近、特に「いい！」と思った瞬間

### kintone のカスタマイズの Integration Test を書いた時

- kintone 上に React で作った UI を埋め込む
- E2E は難しい。手で確認するにもデータを用意するのがだるい
- kintone の API はモックしつつ、
  Integration Test で十分なケースのテストができ、バグもほぼ出なかった
- モックした部分には Assertion を仕込んでいたので、
  想定外のデータが kintone から来ている場合もすぐ気づくことができた
- リリース後も安心してリファクタできた

E2E 環境を作るのが難しい場合は特に有用かもしれない

## Integration Test でカバーできないところ

- アニメーションのテスト
  - Storybook 等でカバーする
- jsdom がサポートしていない機能はモックするしかない
  - https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
  - Storybook 等でカバーする
  - E2E でカバーする
- 本物の API、データベース等を使ったテスト
  - E2E でカバーする
  - GraphQL/Open API などスキーマで担保する
  - Assertion を挿入し、条件を満たしているかチェックする

Integration Test でカバーできないところを頭に入れて、
E2E を減らすことができれば、CI の実行時間が短縮できてよさそう。

## まとめ

### 冷静に整理すると、testing-library が最高という話だった。

- セットアップが楽ですぐ始めることができる
- 安定したテストが書けるので、リファクタしやすい

## We're hiring

- 株式会社 Zene
  - https://www.zene.co.jp/
  - "ゲノムをより身近に、あたりまえの世界に"
- https://www.wantedly.com/companies/company_6418169/projects

# おわり

ありがとうございました
