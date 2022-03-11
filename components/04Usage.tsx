import Image from "next/image";

const Usage = () => {
  return (
    <>
      <div className="usage">
        <h2>使い方</h2>
        <Step />
        <h3>世界を越えよう。あなたのあくびで</h3>
        <button>yawningをはじめる</button>
      </div>
      <style jsx>{`
        .usage {
          scroll-snap-align: start;
          text-align: center;
          background: #F2F2F2;
        }

        h2 {
          padding-top: 185px;
          margin-bottom: 144px;
          font: normal normal bold 60px/72px Helvetica;
          color: #697BFF;
          text-align: center;
        }

        h3{
          font: normal normal normal 48px/82px Noto Sans JP;
          color: #4D4D4D;
          margin-bottom: 40px;
        }

        button{
          width: 863px;
          height: 131px;
          background: #697BFF;
          border-radius: 66px;

          font: normal normal normal 38px/65px Noto Sans JP;
          letter-spacing: 3.04px;
          color: #FFFFFF;

          margin-bottom: 200px;
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
      "あなたのあくびをスコア化することで、あくびの高みを目指せます。\nコンボを繋ぐためには？距離を伸ばすためには？\nシンプルで奥深い。あくび世界の探求者になりましょう。",
    image_ref: "/Google_Pixel_5_Sorta_Sage.png",
  },
];

const Step = () => {
  return (
    <>
      {/* <div className="wrapper"> */}
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
      {/* </div> */}
      <style jsx>{`
        /*
        .wrapper{
          margin-left: auto;
          margin-right: auto;
        }
        */
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
        <div className="leftContent">
          <h3 className="leftTitle">
            <div className="circle">{index + 1}</div>{item.title}
          </h3>
          <p className="leftDescription">{item.description}</p>
          <p className="leftSubDesciption">{item.sub_description}</p>
        </div>
      </div>
      <style jsx>{`

      .circle{
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        line-height: 100px;
        margin-right: 20px;
      }

      .leftContainer{
        
        display: grid;
        grid-template-rows: 100px auto auto;
        grid-template-columns:1fr 333px 750px 1fr;

        margin-bottom: 200px;

        white-space: pre-wrap;
      }

      .leftImage{
        grid-row: 1/4;
        grid-column: 2;
        background: #f88;
      }

      .leftContent{
        grid-row: 2/4;
        grid-column: 3;

        margin-left: 80px;
        justify-self: start;

      }

      .leftTitle{
        font: normal normal normal 48px/82px Noto Sans JP;
        color: #697BFF;
        text-align: left;
      }

      .leftDescription{
        font: normal normal normal 28px/60px Noto Sans JP;
        color: #4D4D4D;
        text-align: left;
      }

      .leftSubDesciption{
        font: normal normal normal 20px/60px Noto Sans JP;
        color: #4D4D4D;
        text-align: left;
        line-height: 2rem;
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
        <div className="rightContent">
          <h3 className="rightTitle">
            <div className="circle">{index + 1}</div>{item.title}
          </h3>
          <p className="rightDescription">{item.description}</p>
          <p className="rightSubDesciption">{item.sub_description}</p>
        </div>
      </div>
      <style jsx>{`
      .rightContainer{
        display: grid;
        grid-template-rows: 100px auto auto;
        grid-template-columns: 1fr 750px 333px 1fr;

        margin-bottom: 200px;

        white-space: pre-wrap;
      }

      .circle{
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        line-height: 100px;
        margin-right: 20px;
      }

      .rightContent{
        grid-row: 2/4;
        grid-column: 2;

        margin-left: 80px;
        justify-self: start;
      }

      .rightImage{
        grid-row: 1/4;
        grid-column: 3;
        background: #f88;
      }

      .rightTitle{
        font: normal normal normal 48px/82px Noto Sans JP;
        color: #697BFF;
        text-align: left;
      }

      .rightDescription{
        font: normal normal normal 28px/60px Noto Sans JP;
        color: #4D4D4D;
        text-align: left;
      }

      .rightSubDesciption{
        font: normal normal normal 20px/60px Noto Sans JP;
        color: #4D4D4D;
        text-align: left;
        line-height: 2rem;
      }
      `}</style>
    </>
  );
}