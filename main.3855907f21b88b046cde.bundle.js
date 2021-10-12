(self.webpackChunkintegration_test_is_awesome=self.webpackChunkintegration_test_is_awesome||[]).push([[179],{4550:(t,e,n)=>{"use strict";n.r(e),n.d(e,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>p,fusumaProps:()=>k,default:()=>m});var l=n(7401),a=n(9332);n(108),n(6066),n(1687),n(230);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}const o=[t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Integration Test、いいぞ"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fukuokajs.connpass.com/event/225489/"},"#14 【オンライン開催】FukuokaJS - connpass"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"自己紹介"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/pirosikick"},"@pirosikick")),(0,a.kt)("li",{parentName:"ul"},"株式会社 Zene CTO"),(0,a.kt)("li",{parentName:"ul"},"エンジニア募集中！",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wantedly.com/companies/company_6418169/projects"},"https://www.wantedly.com/companies/company_6418169/projects")))))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"今日の話"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Trophy の Integration Test、いいぞ！という話"),(0,a.kt)("li",{parentName:"ul"},"そんなこと言わなくてもみんなそう思っている場合は、休憩時間としてお使いください"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Integration Test とは？"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"広義では「結合テスト」"),(0,a.kt)("li",{parentName:"ul"},"狭義（というか今日の発表のスコープ）では、Testing Trophy の Integration Test",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testingjavascript.com/"},"Testing JavaScript with Kent C. Dodds https://testingjavascript.com/")),(0,a.kt)("li",{parentName:"ul"},"2018 年頃に Kent C. Dodds が提唱した概念。割と浸透している？"),(0,a.kt)("li",{parentName:"ul"},"テストピラミッドとは違って、",(0,a.kt)("br",null),"Unit test より Static test・Integration test のボリュームを増やそうという図"))),(0,a.kt)("li",{parentName:"ul"},"E2E と違って、API などはモックしてテストする"),(0,a.kt)("li",{parentName:"ul"},"自分は Jest + jsdom + @testing-library/react でよく書きます"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"例: Jest + jsdom + @testing-library/react"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * @jest-environment jsdom\n */\nimport { screen, waitFor } from "@testing-library/react";\nimport "@testing-library/jest-dom";\n\n// アプリケーションのルートコンポーネント\nimport { HogeApp } from "./HogeApp";\n\nbeforeEach(async () => {\n  // jsdomに描画\n  screen.render(<HogeApp />);\n\n    // 何か待つ時に使う（後述）\n  await waitFor(() => { … });\n});\n\ntest("…", () => {\n  // 要素の取得\n  const submitButton = screen.getByRole("button", { name: "送信する" });\n\n  // 描画された内容を検証する（後述）\n  …\n});\n'))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"要素の取得"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/cheatsheet"},"https://testing-library.com/docs/react-testing-library/cheatsheet")),(0,a.kt)("li",{parentName:"ul"},"同期 or 非同期（getBy/queryBy or findBy）"),(0,a.kt)("li",{parentName:"ul"},"何を元に要素を探すか",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ByRole, ByLabelText, ByPlaceholderText ... etc"))))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"描画された内容を検証する"),(0,a.kt)("p",null,"便利な Jest のカスタムマッチャーを提供している",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"@testing-library/jest-dom"),"は必須。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import "@testing-library/jest-dom";\n\n// 表示・非表示\nexpect(dom).toBeVisible();\nexpect(dom).not.toBeVisible();\n\n// 活性・非活性\nexpect(button).toBeEnabled();\nexpect(button).toBeDisabled();\n\n// 他にも色々あるよ\n'))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"API のモック"),(0,a.kt)("p",null,"@testinng-library/react の",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/example-intro"},"Example"),"で紹介されているのは、",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/msw"},"msw"),"。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { rest } from "msw";\nimport { setupServer } from "msw/node";\n\nconst server = setupServer(\n  rest.get("/greeting", (req, res, ctx) => {\n    return res(ctx.json({ greeting: "hello there" }));\n  })\n);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());\n'))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,"自分の場合は、API 呼び出し等を関数化して、その関数をモックするのが好み。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { fetchSomeData } from "./fetchSomeData";\n\njest.mock("./fetchSomeData");\nconst fetchSomeDataMock = fetchSomeData as jest.Mock;\nbeforeEach(() => {\n  fetchSomeDataMock.mockClear();\n});\n\nbeforeEach(async () => {\n  fetchSomeDataMock.mockResolvedValue({ … });\n\n  screen.render(<HogeApp />);\n\n  await waitFor(() => {\n    expect(fetchSomeDataMock).toHaveBeenCalled();\n  })\n});\n\ntest("calls fetchSomeData correctly", () => {\n  // 回数\n  expect(fetchSomeDataMock).toHaveBeenCalledTimes(1);\n  // 引数\n  expect(fetchSomeDataMock).toHaveBeenCalledWith(…);\n});\n'))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Integration Test のいいところ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"セットアップが楽"),(0,a.kt)("li",{parentName:"ol"},"リファクタが捗る"),(0,a.kt)("li",{parentName:"ol"},"安定したテストが書ける"),(0,a.kt)("li",{parentName:"ol"},"a11y についてちょっと考える機会が発生する")),(0,a.kt)("p",null,"ほとんど、@testing-library/","*","がよくできているぞという話な気がするが。")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"1. セットアップが楽"),(0,a.kt)("p",null,"jest, @testing-library/react, @testing-library/jest-dom をインストールするだけ。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ npm install -D \\\n    jest \\\n    @testing-library/react \\\n    @testing-library/jest-dom\n")),(0,a.kt)("p",null,"CI 上でも問題なく動く")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"2. リファクタが捗る"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"一般的には E2E より実行時間が短いので、",(0,a.kt)("br",null),"\nレッド・グリーン・リファクタリングが回しやすい"),(0,a.kt)("li",{parentName:"ul"},"@testing-library/","*","がよくできており、",(0,a.kt)("br",null),"\nテストが実装依存になりにくく、リファクタでテストが壊れることが少ない"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"3. 安定したテストが書ける")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h4",null,"3.1 ",(0,a.kt)("inlineCode",{parentName:"h4"},"waitFor"),"で待つ"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// モックが呼ばれるのを待つ\nawait waitFor(() => {\n  expect(mock).toHaveBeenCalled();\n});\n\n// 要素が出現するのを待つ\nawait waitFor(() => {\n  screen.getByRole("button", { name: "…" });\n});\n\n// 要素が出現するのを待つ その2\nawait screen.findByRole("button", { name: "…" });\n'))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h4",null,"3.2 DOM 上の構造を変更しても大丈夫"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"getByRole や getByText など、DOM の構造に依存しないテストが書けるので、",(0,a.kt)("br",null),"\nリファクタでコンポーネントを弄りまくってもテストが壊れにくい"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"4. a11y について意識する機会がちょっと発生する"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"テストを安定させるには、",(0,a.kt)("br",null),"なるべく getByRole で要素を取得したいという動機が働く"),(0,a.kt)("li",{parentName:"ul"},"そのためにはセマンティックな DOM 構造が必要"),(0,a.kt)("li",{parentName:"ul"},"「〜は a11y 的にはどうコーディングするのがいいのかな？調べてみるか」となる"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"最近、特に「いい！」と思った瞬間")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"kintone のカスタマイズの Integration Test を書いた時"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kintone 上に React で作った UI を埋め込む"),(0,a.kt)("li",{parentName:"ul"},"E2E は難しい。手で確認するにもデータを用意するのがだるい"),(0,a.kt)("li",{parentName:"ul"},"kintone の API はモックしつつ、\nIntegration Test で十分なケースのテストができ、",(0,a.kt)("br",null),"バグもほぼ出なかった"),(0,a.kt)("li",{parentName:"ul"},"モックした部分には Assertion を仕込んでいたので、",(0,a.kt)("br",null),"\n想定外のデータが kintone から来ている場合もすぐ気づくことができた"),(0,a.kt)("li",{parentName:"ul"},"リリース後も安心してリファクタできた")),(0,a.kt)("p",null,"E2E 環境を作るのが難しい場合は特に有用かもしれない")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Integration Test でカバーできないところ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"アニメーションのテスト",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Storybook 等でカバーする"))),(0,a.kt)("li",{parentName:"ul"},"jsdom がサポートしていない機能はモックするしかない",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform"},"https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform")),(0,a.kt)("li",{parentName:"ul"},"Storybook 等でカバーする"),(0,a.kt)("li",{parentName:"ul"},"E2E でカバーする"))),(0,a.kt)("li",{parentName:"ul"},"本物の API、データベース等を使ったテスト",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E2E でカバーする"),(0,a.kt)("li",{parentName:"ul"},"GraphQL/Open API などスキーマで担保する"),(0,a.kt)("li",{parentName:"ul"},"Assertion を挿入する")))),(0,a.kt)("p",null,"Integration Test でカバーできないところを頭に入れて、",(0,a.kt)("br",null),"\nE2E を減らすことができれば、CI の実行時間が短縮できてよさそう。")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"まとめ")),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h3",null,"冷静に整理すると、",(0,a.kt)("br",null),"testing-library が最高という話だった。"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"セットアップが楽ですぐ始めることができる"),(0,a.kt)("li",{parentName:"ul"},"安定したテストが書けるので、リファクタしやすい"))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"We're hiring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"株式会社 Zene",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zene.co.jp/"},"https://www.zene.co.jp/")),(0,a.kt)("li",{parentName:"ul"},'"ゲノムをより身近に、あたりまえの世界に"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wantedly.com/companies/company_6418169/projects"},"https://www.wantedly.com/companies/company_6418169/projects")))),t=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"おわり"),(0,a.kt)("p",null,"ありがとうございました"))],i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],k=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],s={};function m({components:t,...e}){return(0,a.kt)("wrapper",r({},s,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Integration Test、いいぞ"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fukuokajs.connpass.com/event/225489/"},"#14 【オンライン開催】FukuokaJS - connpass")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"自己紹介"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/pirosikick"},"@pirosikick")),(0,a.kt)("li",{parentName:"ul"},"株式会社 Zene CTO"),(0,a.kt)("li",{parentName:"ul"},"エンジニア募集中！",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wantedly.com/companies/company_6418169/projects"},"https://www.wantedly.com/companies/company_6418169/projects"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"今日の話"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Trophy の Integration Test、いいぞ！という話"),(0,a.kt)("li",{parentName:"ul"},"そんなこと言わなくてもみんなそう思っている場合は、休憩時間としてお使いください")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Integration Test とは？"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"広義では「結合テスト」"),(0,a.kt)("li",{parentName:"ul"},"狭義（というか今日の発表のスコープ）では、Testing Trophy の Integration Test",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testingjavascript.com/"},"Testing JavaScript with Kent C. Dodds https://testingjavascript.com/")),(0,a.kt)("li",{parentName:"ul"},"2018 年頃に Kent C. Dodds が提唱した概念。割と浸透している？"),(0,a.kt)("li",{parentName:"ul"},"テストピラミッドとは違って、",(0,a.kt)("br",null),"Unit test より Static test・Integration test のボリュームを増やそうという図"))),(0,a.kt)("li",{parentName:"ul"},"E2E と違って、API などはモックしてテストする"),(0,a.kt)("li",{parentName:"ul"},"自分は Jest + jsdom + @testing-library/react でよく書きます")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"例: Jest + jsdom + @testing-library/react"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * @jest-environment jsdom\n */\nimport { screen, waitFor } from "@testing-library/react";\nimport "@testing-library/jest-dom";\n\n// アプリケーションのルートコンポーネント\nimport { HogeApp } from "./HogeApp";\n\nbeforeEach(async () => {\n  // jsdomに描画\n  screen.render(<HogeApp />);\n\n    // 何か待つ時に使う（後述）\n  await waitFor(() => { … });\n});\n\ntest("…", () => {\n  // 要素の取得\n  const submitButton = screen.getByRole("button", { name: "送信する" });\n\n  // 描画された内容を検証する（後述）\n  …\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"要素の取得"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/cheatsheet"},"https://testing-library.com/docs/react-testing-library/cheatsheet")),(0,a.kt)("li",{parentName:"ul"},"同期 or 非同期（getBy/queryBy or findBy）"),(0,a.kt)("li",{parentName:"ul"},"何を元に要素を探すか",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ByRole, ByLabelText, ByPlaceholderText ... etc")))),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"描画された内容を検証する"),(0,a.kt)("p",null,"便利な Jest のカスタムマッチャーを提供している",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"@testing-library/jest-dom"),"は必須。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import "@testing-library/jest-dom";\n\n// 表示・非表示\nexpect(dom).toBeVisible();\nexpect(dom).not.toBeVisible();\n\n// 活性・非活性\nexpect(button).toBeEnabled();\nexpect(button).toBeDisabled();\n\n// 他にも色々あるよ\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"API のモック"),(0,a.kt)("p",null,"@testinng-library/react の",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/example-intro"},"Example"),"で紹介されているのは、",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/msw"},"msw"),"。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { rest } from "msw";\nimport { setupServer } from "msw/node";\n\nconst server = setupServer(\n  rest.get("/greeting", (req, res, ctx) => {\n    return res(ctx.json({ greeting: "hello there" }));\n  })\n);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"自分の場合は、API 呼び出し等を関数化して、その関数をモックするのが好み。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { fetchSomeData } from "./fetchSomeData";\n\njest.mock("./fetchSomeData");\nconst fetchSomeDataMock = fetchSomeData as jest.Mock;\nbeforeEach(() => {\n  fetchSomeDataMock.mockClear();\n});\n\nbeforeEach(async () => {\n  fetchSomeDataMock.mockResolvedValue({ … });\n\n  screen.render(<HogeApp />);\n\n  await waitFor(() => {\n    expect(fetchSomeDataMock).toHaveBeenCalled();\n  })\n});\n\ntest("calls fetchSomeData correctly", () => {\n  // 回数\n  expect(fetchSomeDataMock).toHaveBeenCalledTimes(1);\n  // 引数\n  expect(fetchSomeDataMock).toHaveBeenCalledWith(…);\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Integration Test のいいところ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"セットアップが楽"),(0,a.kt)("li",{parentName:"ol"},"リファクタが捗る"),(0,a.kt)("li",{parentName:"ol"},"安定したテストが書ける"),(0,a.kt)("li",{parentName:"ol"},"a11y についてちょっと考える機会が発生する")),(0,a.kt)("p",null,"ほとんど、@testing-library/","*","がよくできているぞという話な気がするが。"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"1. セットアップが楽"),(0,a.kt)("p",null,"jest, @testing-library/react, @testing-library/jest-dom をインストールするだけ。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ npm install -D \\\n    jest \\\n    @testing-library/react \\\n    @testing-library/jest-dom\n")),(0,a.kt)("p",null,"CI 上でも問題なく動く"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"2. リファクタが捗る"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"一般的には E2E より実行時間が短いので、",(0,a.kt)("br",null),"\nレッド・グリーン・リファクタリングが回しやすい"),(0,a.kt)("li",{parentName:"ul"},"@testing-library/","*","がよくできており、",(0,a.kt)("br",null),"\nテストが実装依存になりにくく、リファクタでテストが壊れることが少ない")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"3. 安定したテストが書ける"),(0,a.kt)("hr",null),(0,a.kt)("h4",null,"3.1 ",(0,a.kt)("inlineCode",{parentName:"h4"},"waitFor"),"で待つ"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// モックが呼ばれるのを待つ\nawait waitFor(() => {\n  expect(mock).toHaveBeenCalled();\n});\n\n// 要素が出現するのを待つ\nawait waitFor(() => {\n  screen.getByRole("button", { name: "…" });\n});\n\n// 要素が出現するのを待つ その2\nawait screen.findByRole("button", { name: "…" });\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",null,"3.2 DOM 上の構造を変更しても大丈夫"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"getByRole や getByText など、DOM の構造に依存しないテストが書けるので、",(0,a.kt)("br",null),"\nリファクタでコンポーネントを弄りまくってもテストが壊れにくい")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"4. a11y について意識する機会がちょっと発生する"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"テストを安定させるには、",(0,a.kt)("br",null),"なるべく getByRole で要素を取得したいという動機が働く"),(0,a.kt)("li",{parentName:"ul"},"そのためにはセマンティックな DOM 構造が必要"),(0,a.kt)("li",{parentName:"ul"},"「〜は a11y 的にはどうコーディングするのがいいのかな？調べてみるか」となる")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"最近、特に「いい！」と思った瞬間"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"kintone のカスタマイズの Integration Test を書いた時"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kintone 上に React で作った UI を埋め込む"),(0,a.kt)("li",{parentName:"ul"},"E2E は難しい。手で確認するにもデータを用意するのがだるい"),(0,a.kt)("li",{parentName:"ul"},"kintone の API はモックしつつ、\nIntegration Test で十分なケースのテストができ、",(0,a.kt)("br",null),"バグもほぼ出なかった"),(0,a.kt)("li",{parentName:"ul"},"モックした部分には Assertion を仕込んでいたので、",(0,a.kt)("br",null),"\n想定外のデータが kintone から来ている場合もすぐ気づくことができた"),(0,a.kt)("li",{parentName:"ul"},"リリース後も安心してリファクタできた")),(0,a.kt)("p",null,"E2E 環境を作るのが難しい場合は特に有用かもしれない"),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Integration Test でカバーできないところ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"アニメーションのテスト",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Storybook 等でカバーする"))),(0,a.kt)("li",{parentName:"ul"},"jsdom がサポートしていない機能はモックするしかない",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform"},"https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform")),(0,a.kt)("li",{parentName:"ul"},"Storybook 等でカバーする"),(0,a.kt)("li",{parentName:"ul"},"E2E でカバーする"))),(0,a.kt)("li",{parentName:"ul"},"本物の API、データベース等を使ったテスト",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E2E でカバーする"),(0,a.kt)("li",{parentName:"ul"},"GraphQL/Open API などスキーマで担保する"),(0,a.kt)("li",{parentName:"ul"},"Assertion を挿入する")))),(0,a.kt)("p",null,"Integration Test でカバーできないところを頭に入れて、",(0,a.kt)("br",null),"\nE2E を減らすことができれば、CI の実行時間が短縮できてよさそう。"),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"まとめ"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"冷静に整理すると、",(0,a.kt)("br",null),"testing-library が最高という話だった。"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"セットアップが楽ですぐ始めることができる"),(0,a.kt)("li",{parentName:"ul"},"安定したテストが書けるので、リファクタしやすい")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"We're hiring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"株式会社 Zene",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zene.co.jp/"},"https://www.zene.co.jp/")),(0,a.kt)("li",{parentName:"ul"},'"ゲノムをより身近に、あたりまえの世界に"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wantedly.com/companies/company_6418169/projects"},"https://www.wantedly.com/companies/company_6418169/projects"))),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"おわり"),(0,a.kt)("p",null,"ありがとうございました"))}m.isMDXComponent=!0},5516:(t,e,n)=>{"use strict";n.r(e)},3447:(t,e,n)=>{var l={"./1.md":4550};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}a.keys=function(){return Object.keys(l)},a.resolve=r,t.exports=a,a.id=3447}},t=>{t.O(0,[179],(()=>{[901,921,626].map(t.E)}),5);var e=e=>t(t.s=e);t.O(0,[736],(()=>(e(7751),e(6905),e(9969))));t.O()}]);