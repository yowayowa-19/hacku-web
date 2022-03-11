import Image from "next/image";

const Top = (): JSX.Element => {
  return (
    <>
      <div className={`area bg`}>
        <h1 className="headerLogo">
          <Image src={"/yawning.png"} width={1241 * 0.15} height={224 * 0.15} />
        </h1>
        <div className="outerContainer">
          <div className="innerContainer">
            <div className="item1">
              <Image src={"/yawning_logo.png"} width={105} height={159} />
            </div>
            <div className="item2">
              <Image src={"/yawning.png"} width={500} height={91} className={"item2"} />
            </div>
            <h2 className="item3">あくびは世界を超える</h2>
          </div>
          <div className="item4">メインビジュアル</div>
        </div>
      </div>
      <style jsx>{`
        .area {
          scroll-snap-align: start;
          height: 100vh;

        }

        .bg{
          background: #f2f2f2
        }

        .headerLogo{
          padding-top: 50px;
          padding-left: 50px;
        }

        .outerContainer{
          display: grid;
          grid-template-columns: 605px 800px;
          grid-template-rows: 1fr ;

          margin-top: 250px;
          margin-left: 125px;
        }

        .innerContainer{
          display: grid;
          grid-template-columns: 105px 500px;
          grid-template-rows: auto auto;

          grid-row:1;
          grid-column:1;
        }

        .item1{
          grid-row: 1/3;
          grid-column: 1;
        }

        .item2{
          grid-row: 1/2;
          grid-column: 2;
          margin-top: 25px;
          margin-left: 10px;
        }

        .item3{
          grid-row: 2/3;
          grid-column: 2;
          color: #5E6EE8;
          margin-top: 15px;
          margin-left: 10px;
          font: normal normal normal 28px/60px Source Han Sans JP;
        }

        .item4{
          grid-row: 1;
          grid-column: 2;
          margin: auto auto;
          
        }

      `}</style>
    </>
  );
};

export default Top;
