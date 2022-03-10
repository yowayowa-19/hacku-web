import YouTube from "react-youtube";

const Promotion = () => {
  return (
    <>
      <div className="area">
        <h2>起こそう、あくびのニューウェーブ きっとできる。あなたのあくびで</h2>
        <YouTube videoId="c5rjeSuXtrE"></YouTube>
      </div>
      <style jsx>{`
        .area {
          scroll-snap-align: start;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Promotion;
