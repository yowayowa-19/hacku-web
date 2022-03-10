import Google_Pixel from "../public/Google_Pixel_5_Sorta_Sage.png";
import Image from "next/image";

const Usage = () => {
  return (
    <>
      <div className="usage">
        <h2>使い方</h2>
        <Step />
        <h3>世界を越えよう．あなたのあくびで</h3>
        <button>yawningをはじめる</button>
      </div>
      <style jsx>{`
        .usage {
          mergin-top: 100vh;
        }
      `}</style>
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
    image_ref: { Google_Pixel },
  },
  {
    title: "コンボを繋げる",
    description: "あくびがうつるとコンボが繋がります",
    sub_description:
      "あくびをしてから5秒以内にあくびをした人が居るとコンボが繋がります。あくびマップにピンが刺さり、あくびが繋がり連鎖します。",
    image_ref: { Google_Pixel },
  },
  {
    title: "登ろう。あくびの高みへ",
    description: "コンボ数・あくび距離をスコア化",
    sub_description:
      "あなたのあくびをスコア化することで、あくびの高みを目指せます。 コンボを繋ぐためには？距離を伸ばすためには？ シンプルで奥深い。あくび世界の探求者になりましょう。",
    image_ref: { Google_Pixel },
  },
];

const Step = () => {
  return (
    <>
      {content.map((item, index) => {
        return (
          <>
            <Image
              src="/Google_Pixel_5_Sorta_Sage.png"
              width={296}
              height={548}
              alt="some picture"
            />
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
