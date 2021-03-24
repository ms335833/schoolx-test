const LargestPLatformComponent = (props) => {
  let { setOpenCloseModal } = props;
  return (
    <div className="course_selection_container">
      {/* images */}
      <div className="inside_container ">
        <div className="flex justify-center top_image">
          <img src="/flower-right-facing.svg" />
        </div>
        <div className="flex items-center justify-end">
          <div>
            <img src="/flower-right-facing.svg" />
          </div>
          <div>
            <img src="/Repeat-Grid-7.svg" />
            {/* <img src="/Repeat-Grid-17.svg" /> */}
          </div>
        </div>
      </div>
      {/* <title */}
      <div className="main_content_title">
        <h2>Pakistan’s largest learning platform</h2>
      </div>
      {/* discription */}
      <div className="main_content_discription">
        <p>
          <span className="blue_text">98%</span> of the attendees
          <span className="blue_text">finish the course</span> thanks to unique
          of motivation system.
        </p>
      </div>
      {/* button */}
      <div className="flex first_button_container">
        <div className="button_container">
          {/* custom button */}
          <div
            className="flex button justify-between items-center"
            onClick={() => setOpenCloseModal(true)}
          >
            <div className="flex items-center">
              <div>
                <img src="/Category-icon2.svg" />
              </div>
              <div className="button_text">
                <h4>Select Course</h4>
              </div>
            </div>
            <div>
              <img src="/Path-36.svg" />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd button */}
      <div className="flex button_container2">
        <button>Start Learning</button>
      </div>
      {/* icon and paragraph */}
      <div className="flex justify-between downArrow_paragraph_container">
        {/* left side */}
        <div>
          <img src="/down-arrow.png" />
        </div>
        <div>
          <h4>Over 20 Categories of courses</h4>
          <p>Join to the thousand's of people</p>
        </div>
      </div>
      {/* bottom images */}
      <div className="bottom_images_container">
        <img src="/Repeat-Grid-7.svg" />
      </div>
    </div>
  );
};
export default LargestPLatformComponent;
