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
    image_ref: "/Google_Pixel_5_Sorta_Sage.png",
  },
  {
    title: "コンボを繋げる",
    description: "あくびがうつるとコンボが繋がります",
    sub_description:
      "あくびをしてから5秒以内にあくびをした人が居るとコンボが繋がります。あくびマップにピンが刺さり、あくびが繋がり連鎖します。",
    image_ref: "/Google_Pixel_5_Sorta_Sage.png",
  },
  {
    title: "登ろう。あくびの高みへ",
    description: "コンボ数・あくび距離をスコア化",
    sub_description:
      "あなたのあくびをスコア化することで、あくびの高みを目指せます。 コンボを繋ぐためには？距離を伸ばすためには？ シンプルで奥深い。あくび世界の探求者になりましょう。",
    image_ref: "/Google_Pixel_5_Sorta_Sage.png",
  },
];

const Step = () => {
  return (
    <>
      <div className="wrapper">
        {content.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <LeftBox item={item} index={index}></LeftBox>
            )
          } else {
            return (
              <RightBox item={item} index={index}></RightBox>
            );
          }
        })}
      </div>
      <style jsx>{`
        .wrapper{
          margin-left: auto;
          margin-right: auto;
        }
        `}</style>
    </>
  );
};

const LeftBox = (
  { item, index }: {
    item: {
      title: string;
      description: string;
      sub_description: string;
      image_ref: string;
    }; index: number
  }
) => {
  return (
    <>
      <div className="leftContainer" key={index}>
        <div className="leftImage">
          <Image
            src={item.image_ref}
            width={333}
            height={616}
            alt="some picture"
          />
        </div>
        <h3 className="leftTitle">{item.title}</h3>
        <p className="leftDescription">{item.description}</p>
        <p className="leftSubDesciption">{item.sub_description}</p>
      </div>
      <style jsx>{`
      .leftContainer{
        
        display: grid;
        grid-template-rows: 100px auto auto;
        grid-template-columns: 333px 750px;
      }

      .leftImage{
        grid-row: 1/4;
        grid-column: 1;
        background: #f88;
      }

      .leftTitle{
        grid-row: 1;
        grid-column: 2;
      }

      .leftDescription{
        grid-row: 2;
        grid-column: 2;
      }

      .leftSubDesciption{
        grid-row: 3;
        grid-column: 2;
      }
      `}</style>
    </>
  );
}

const RightBox = (
  { item, index }: {
    item: {
      title: string;
      description: string;
      sub_description: string;
      image_ref: string;
    }; index: number
  }
) => {
  return (
    <>
      <div className="rightContainer">
        <div className="rightImage">
          <Image
            src={item.image_ref}
            width={333}
            height={616}
            alt="some picture"
          />
        </div>
        <h3 className="rightTitle">{item.title}</h3>
        <p className="rightDescription">{item.description}</p>
        <p className="rightSubDesciption">{item.sub_description}</p>
      </div>
      <style jsx>{`
      .rightContainer{
        display: grid;
        grid-template-rows: 100px auto auto;
        grid-template-columns: 750px 333px;
      }

      .rightImage{
        grid-row: 1/4;
        grid-column: 2;
        background: #f88;
      }

      .rightTitle{
        grid-row: 1;
        grid-column: 1;
      }

      .rightDescription{
        grid-row: 2;
        grid-column: 1;
      }

      .rightSubDesciption{
        grid-row: 3;
        grid-column: 1;
      }
      `}</style>
    </>
  );
}