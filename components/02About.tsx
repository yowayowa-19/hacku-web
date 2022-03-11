import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <>
      <div className={`area container`} >
        <div className="item1">
          <Image
            src={
              "https://images.pexels.com/photos/56857/animal-cat-kitten-funny-56857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            width={828 * 0.6}
            height={552 * 0.6}
            alt="yawning"
          />
        </div>
        <h3 className={`subTitle item2`}>あくびってうつりませんか？</h3>
        <p className="item3">
          友達・家族につられて <br />
          あくびをしてしまった。 <br /><br />
          大事な会議中。<br />
          上司にあくびをうつしてしまった。<br /><br />
          自分の意思に反してうつり・うつってしまう「あくび」 <br />
          Yawningはあくびを繋ぐことで人にうつす体験ができる <br />
          新時代のあくびネットワークです。<br />
        </p>
      </div>

      <style jsx>{`
        .area {
          scroll-snap-align: start;
          height: 100vh;
        }

        .subTitle{
          text-align: left;
          font: normal normal normal 48px/82px Noto Sans JP;
          color: #697BFF;
        }

        .container{
          display: grid;
          grid-template-columns:auto auto ;
          grid-template-rows: 200px auto;
          
          padding-top: 100px;
        }

        .item1{
          grid-row: 1/3;
          grid-column: 1;
          align-self: center;
          justify-self: center;
        }

        .item2{
          grid-row: 1/2;
          grid-column: 2;
          justify-self: left;
        }

        .item3{
          grid-row: 2/3;
          grid-column: 2;
          

          font: normal normal normal 24px/40px Noto Sans JP;
          color: #4D4D4D;
        }

      `}</style>
    </>
  );
};

export default About;
