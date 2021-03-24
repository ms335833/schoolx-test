const CoursesIntro = () => {
  return (
    <div className="course_intro_container">
      {/* main title */}
      <div className="main_title">
        <h3>
          School X is an interesting program that will teach you courses in an
          interactive way
        </h3>
      </div>
      {/* courses info and images */}
      <div className="courses_Content_container">
        {/* 1stbox */}
        <div className="firstBox_container">
          {/* image */}
          <div>
            <img src="/Graphic-1.svg" />
          </div>
          <div>
            <h4>Daily live classes Chat with educators Ask questions</h4>
          </div>
        </div>
        {/* 2ndbox */}
        <div className="box_container">
          {/* image */}
          <div>
            <img src="/Graphic-02.svg" />
          </div>
          <div>
            <h4>
              Practice and revise Learning isn't just limited to classes with
              our practice section.
            </h4>
          </div>
        </div>
        {/* 3rdbox */}
        <div className="box_container">
          {/* image */}
          <div>
            <img src="/Graphic-02.svg" />
          </div>
          <div>
            <h4>
              Learn anytime anywhere One subscription gets you access to all our
              live and recorded classes.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursesIntro;
