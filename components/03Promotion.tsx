import YouTube from "react-youtube";

const Promotion = () => {
  return (
    <>
      <div className="area">
        <h2 className="subTitle">
          起こそう、あくびのニューウェーブ <br />
          きっとできる。あなたのあくびで</h2>
        <div className="youtube">
          <YouTube videoId="S1WZL3G5jZM" />
        </div>
      </div>
      <style jsx>{`
        .area {
          scroll-snap-align: start;
          height: 100vh;
        }

        .subTitle {
          text-align: center;
          font: normal normal normal 56px/80px Noto Sans JP;
          color: #697BFF;
          padding-top: 150px;
          margin-bottom: 80px;
        }

        .youtube{
          text-align: center;
        }

        iframe {
          text-align: center;
        }

      `}</style>
    </>
  );
};

export default Promotion;
