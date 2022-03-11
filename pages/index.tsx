import type { NextPage } from "next";
import Top from "../components/01Top";
import About from "../components/02About";
import Promotion from "../components/03Promotion";
import Usage from "../components/04Usage";
import Question from "../components/06Question";
import Footer from "../components/07Footer";

const Home: NextPage = () => {
  // TODO スクロール位置が100vh以上から100vh未満になったら、スクロール位置をtopにする
  // TODO 内側と外側のスクロールを同期させたほうが楽そう
  return (
    <>
      <div className="outerContainer">
        <div className="container">
          <Top />
          <About />
          <Promotion />
        </div>
        <Usage />
        <Question />
        <Footer />
      </div>
      <style jsx>{`
        .outerContainer {
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          height: 100vh;
        }

        .container {
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          height: 100vh;
        }

        ::-webkit-scrollbar {
          display: none;
        }
        .area {
          scroll-snap-align: start;
          height: max-content;
        }
      `}</style>
    </>
  );
};

export default Home;
