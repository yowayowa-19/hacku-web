const Question = () => {
  return (
    <>
      <h2>よくある質問</h2>
      <QuestionList />
      <style jsx>{``}</style>
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
            <p key={index}>{item.question}</p>
            <p>{item.answer}</p>
          </>
        );
      })}

      <style jsx>{``}</style>
    </>
  );
};
