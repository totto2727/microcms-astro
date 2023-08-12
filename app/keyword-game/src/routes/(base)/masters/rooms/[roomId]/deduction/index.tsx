import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "pandacss/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>推理フェーズ</h1>
        <h2>各チームの登録ワード</h2>
        <div>隠す</div>
        <ul>
          <li>
            <h3>チーム1</h3>
            <div>コピー</div>
            <div>わたし</div>
            <h4>各メンバーの発言回数</h4>
            <ul>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
            </ul>
            <div>合計15回</div>
            <h4>他チームの回答予想</h4>
            <ul>
              <li>
                <div>チーム2</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム3</div>
                <div>ゆめみ</div>
              </li>
            </ul>
          </li>
          <li>
            <h3>チーム2</h3>
            <div>コピー</div>
            <div>自分</div>
            <ul>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
            </ul>
            <div>合計15回</div>
            <h4>他チームの回答予想</h4>
            <ul>
              <li>
                <div>チーム1</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム3</div>
                <div>ゆめみ</div>
              </li>
            </ul>
          </li>
          <li>
            <h3>チーム3</h3>
            <div>コピー</div>
            <div>ゆめみ</div>
            <ul>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
              <li>
                <div>〇〇</div>
                <div>5</div>
              </li>
            </ul>
            <div>合計15回</div>
            <h4>他チームの回答予想</h4>
            <ul>
              <li>
                <div>チーム1</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム2</div>
                <div>ゆめみ</div>
              </li>
            </ul>
          </li>
        </ul>
        <h2>ルーム分け</h2>
        <ul>
          <li>
            <h3>ルーム1</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
          <li>
            <h3>ルーム2</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
          <li>
            <h3>ルーム3</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
        </ul>
        <button>推理を終了する</button>
      </div>
    </>
  );
});