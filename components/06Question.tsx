import { useState } from "react";
import { Transition } from "react-transition-group";


const Question = () => {
  return (
    <>
      <div className="wrapper">
        <h2>よくある質問</h2>
        <QuestionList />
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
          font: normal normal normal 40px/68px Noto Sans JP;
          color: #4D4D4D;
          margin-top: 200px;
          margin-bottom: 100px;
        }

        .wrapper{
          min-height: 150vh;
        }
        `}</style>
    </>
  );
};

export default Question;

const content = [
  {
    question: "あくびがでません",
    answer:
      "二酸化炭素濃度が高い場所に行ったり、退屈な話を聞くとあくびが出やすくなるみたいです。",
  },
  {
    question: "「位置情報が取得できません」と表示されます",
    answer: "設定から位置情報の取得を許可して下さい。",
  },
  {
    question: "あくびが止まりません",
    answer: "あくびは100回連続で出してしまっても大丈夫らしいので頑張って下さい。",
  },
];

const QuestionList = () => {
  return (
    <>
      {content.map((item, index) => {
        return (
          <>
            {/* accordion */}
            <Accordion question={item.question} answer={item.answer} />
          </>
        );
      })}

      <style jsx>{``}</style>
    </>
  );
};

const Accordion = ({ question, answer }: { question: string, answer: string }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`upside ${isOpen ? 'close' : 'open'}`}>
          <div className="mark">Q. </div>
          <div className="content">{question}</div>
          <div className="plusMinus">{isOpen ? "-" : "+"}</div>
        </button>

        {isOpen &&
          <div className="underside">
            <div className="mark">A.</div>
            <div className="content">{answer}</div>
            <div className="plusMinus" />
          </div>
        }

        {/* <Transition in={!isOpen} timeout={500}>

          <div className={classNames('underside', 'easing2')}>
            <div className="mark">A.</div>
            <div className="content">{answer}</div>
            <div className="plusMinus" />
          </div>
        </Transition>
 */}



      </div>
      <style jsx>{`

      .easing2 {transition-timing-function: cubic-bezier(1,0,0,1)}
        .container{
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          width: 1200px;
          margin: 0 auto;
          margin-top: 32px;
          
          transition: all 300ms 0s ease;

          overflow: hidden;
        }


        .open{
          background-color: #F5F5F5;
          border-radius: 16px;
        }

        .close{
          background: #697BFF39;
          border-radius: 16px 16px 0 0;
        }

        .upside{
          display: flex;
          flex-direction: row;
          
          height: 120px;
          width: 1200px;
          
          align-items: center;
        }

        .underside {
          display: flex;
          flex-direction: row;
          min-height: 120px;
          width: 1200px;
          background-color: #F5F5F5;
          border-radius: 0 0 16px 16px;
          justify-content: center;

          overflow: hidden;
          transition: 0.2s ease-in-out;
        }

        .mark{
          font: normal normal normal 28px/48px Noto Sans JP;
          color: #4D4D4D;

          width: 100px;
          height: 100px;
          
          text-align: center;
          
          font-size: 28px;

          justify-self: right;

          padding-top: 50px;
          margin-bottom: 50px;
        }

        .content{
          width: 1000px;
          min-height: 100px;
          text-align: left;

          padding-top: 50px;
          margin-bottom: 50px;

          font: normal normal normal 28px/48px Noto Sans JP;
          color: #4D4D4D;
        }

        .plusMinus{
          font: normal normal normal 48px/48px Noto Sans JP;
          color: #4D4D4D;

          width: 100px;
          height: 100px;
          
          text-align: center;
          

          justify-self: right;

          padding-top: 50px;
          margin-bottom: 50px;;
        }
        `}</style>
    </>
  )
}