const Usage = () => {
  return (
    <>
      <h2>使い方</h2>
      <Step />
      <h3>世界を越えよう．あなたのあくびで</h3>
      <button>yawningをはじめる</button>
      <style jsx>{``}</style>
    </>
  );
};

export default Usage;

const content = [
  {
    title: "あくびをする",
    description: "あくびが出そうになったらボタンを押しましょう",
    sub_description:
      "ボタンを押すことであなたの位置情報がサーバーに送信されます。",
  },
  {
    title: "コンボを繋げる",
    description: "あくびがうつるとコンボが繋がります",
    sub_description:
      "あくびをしてから5秒以内にあくびをした人が居るとコンボが繋がります。あくびマップにピンが刺さり、あくびが繋がり連鎖します。",
  },
  {
    title: "登ろう。あくびの高みへ",
    description: "コンボ数・あくび距離をスコア化",
    sub_description:
      "あなたのあくびをスコア化することで、あくびの高みを目指せます。 コンボを繋ぐためには？距離を伸ばすためには？ シンプルで奥深い。あくび世界の探求者になりましょう。",
  },
];

const Step = () => {
  return (
    <>
      {content.map((item, index) => {
        return (
          <>
            <h3 key={index}>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.sub_description}</p>
          </>
        );
      })}
      <style jsx>{``}</style>
    </>
  );
};
