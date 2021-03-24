const ProfileInfo = () => {
  return (
    <div className="profile_info_container">
      {/* profile images */}
      <div>
        <div className="dot_image_container">
          <img src="/Repeat-Grid-16.svg" width="100%" />
        </div>
        <div className="profile_image_container">
          {/* profile image */}
          <div>
            <img src="/Ellipse-240.png" />
          </div>
          {/* content */}
          <div className="profile_discription">
            <h4>Julio R</h4>
            <h5>Web Developer</h5>
            <p>Chilli</p>
          </div>
          <div className="profile_detail">
            <p>
              "I started at stage zero. With School X I was able to start
              learning online and eventually build up enough knowledge and
              skills to transition into a well-paying career."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
