const Top = (): JSX.Element => {
  return (
    <>
      <div className="area">
        <h1>yawning</h1>
        <h2>yawning</h2>
        <h3>あくびは世界を超える</h3>
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

export default Top;
