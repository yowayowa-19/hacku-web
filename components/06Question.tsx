import { useState } from "react";

const Question = () => {
  return (
    <>
      <h2>よくある質問</h2>
      <QuestionList />
      <style jsx>{`
        h2 {
          text-align: center;
          font: normal normal normal 40px/68px Hiragino Sans;
          color: #4D4D4D;
          margin-top: 200px;
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
    answer: "some answer 2",
  },
  {
    question: "あくびが止まりません",
    answer: "some answer 3",
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
        <button onClick={() => setIsOpen(!isOpen)} className="innnerContainer">
          <div className="mark">Q. </div>
          <div className="content">{question}</div>
          <div className="plusMinus">{isOpen ? "-" : "+"}</div>
        </button>
        {isOpen &&
          <>
            <div className="mark">A.</div>
            <div className="content">{answer}</div>
          </>
        }

      </div>
      <style jsx>{`

        .container{
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          width: 1200px;

          margin: 0 auto;
        }

        .innnerContainer{
          display: flex;
          flex-direction: row;
          width: 1200px;
        }

        .mark{
          width: 100px;
          height: 100px;
          text-align: center;
          vertical-align: middle;
          font-size: 28px;
        }

        .content{
          width: 1000px;
          height: 100px;
          text-align: left;
          font-size: 28px;
        }

        .plusMinus{
          width: 100px;
          height: 100px;
          text-align: center;
          
          font-size: 40px;
        }
        `}</style>
    </>
  )
}