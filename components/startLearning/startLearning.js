const StartLearningInfo = () => {
  return (
    <div className="learning_info_container">
      {/* side image */}
      <div className="side_image">
        <img src="/Yellow-graphic.svg" />
      </div>
      <div className="left_side_content">
        {/* title */}
        <div className="title">
          <h2>Start Learning with schoolX</h2>
        </div>
        {/* discription */}
        <div className="discription">
          <p>
            Get unlimited access to structured courses & doubt clearing sessions
          </p>
        </div>
        {/* button */}
        <div className="button">
          <button>Start Learning</button>
        </div>
      </div>
    </div>
  );
};
export default StartLearningInfo;
