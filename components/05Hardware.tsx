const Hardware = () => {
  return (
    <>
        <div className="container bg">
          <h2 className="subTitle">
            あくびの世界を
            <br />
            追求する究極の
            <br />
            デバイス
          </h2>
          <div className="image"></div>
        </div>
        {content.map((item, index) => (
          <>
            <h3 className="sectionTitle">{item.section}</h3>
            <p className="sectionText">{item.text}</p>
          </>
        ))}
        <h3 className="sectionTitle">仕様</h3>
      <style jsx>{`
        .bg {
          margin-top: 200px;
          margin-bottom: 120px;
          height: 100vh;
          background-image: url("/IMG20220312032155.jpg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: right;
          background-attachment: local;
        }

        .subTitle {
          font: normal normal normal 72px/140px Noto Sans JP;
          letter-spacing: 2.88px;
          color: #5e6ee8;
          margin-left: 200px;
          padding-top: 300px;
        }

        .sectionTitle {
          font: normal normal normal 32px/60px Noto Sans JP;
          letter-spacing: 1.28px;
          color: #5e6ee8;
          width: 1200px;
          margin: 0 auto 0 auto;
        }

        .sectionText {
          font: normal normal normal 24px/48px Noto Sans JP;
          letter-spacing: 0.96px;
          color: #4d4d4d;
          width: 1200px;
          margin: 0 auto 80px auto;
        }
      `}</style>
    </>
  );
};
export default Hardware;

const content = [
  {
    section: "1. 物理ボタンで快適なあくび",
    text: "物理ボタンを搭載することで、スマートフォンアプリ使用時に生じていたアプリの開き遅れによる、あくびの取りこぼしをなくすことができます。スマートな見た目に押し心地最高なボタンで快適なあくびを生み出します。",
  },
  {
    section: "2. CO2センサーによってあくび環境を計測",
    text: "Yawning ProではCO2センサーを搭載、計測することで、あなたの環境があくびに最適かをどうかをあくび指数として確認することができます。あくび指数はスマートフォンアプリから確認することができます。こちらの機能を使えばよりあくびのしやすい環境へいくことができるでしょう。",
  },
];
