import type { NextPage } from "next";
import Top from "../components/01Top";
import About from "../components/02About";
import Promotion from "../components/03Promotion";
import Usage from "../components/04Usage";
import Question from "../components/05Question";
import Footer from "../components/06Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Top />
      <About />
      <Promotion />
      <Usage />
      <Question />
      <Footer />
    </>
  );
};

export default Home;
