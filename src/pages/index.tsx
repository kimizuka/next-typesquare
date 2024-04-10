import styled from 'styled-components';
import { use, useEffect, useState } from 'react';

const Wrapper = styled.div`
  font-size: 16px;
  font-family: "新ゴ 太ライン AP", "Shin Go Futoline AP";
`;

export default function IndexPage() {
  const [ text, setText ] = useState<string>('');
  const [ count, setCount ] = useState<number>(0);

  useEffect(() => {
    setText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  }, []);

  useEffect(() => {
    setTimeout(render, 1000);
  }, [count]);

  function render() {
    setCount(count + 1);
  }

  return (
    <Wrapper>
      <div>
        <p>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
        <p>またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。</p>
      </div>
      <div>
        <p>{ text }</p>
      </div>
      <div>
        <p>{ count }</p>
      </div>
    </Wrapper>
  );
}