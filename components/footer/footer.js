const Footer = () => {
  return (
    <div className="footer_container">
      {/* logo */}
      <div>
        <img src="/Logo.svg" />
      </div>
      {/* lists */}
      <div className="flex justify-between lists_container">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Careers</li>
        </ul>
        <ul className="second_lists">
          <li>Privacy Policy </li>
          <li>Terms and Conditions </li>
          <li>Sitemap</li>
        </ul>
      </div>
      {/* hr line */}
      <div className="hr_line_container">
        <hr />
      </div>
      {/* advertisement title */}
      <div className="advertisemnt_title">
        <h4>Download App</h4>
      </div>
      {/* button images */}
      <div className="flex button_container">
        <div>
          <img src="/google-play-badge.png" />
        </div>
        <div className="second_image">
          <img src="/app-store-badge.png" />
        </div>
      </div>
      {/* social icons */}
      <div className="flex items-center icons_container">
        <div className="single_icon">
          <img src="/facebook.svg" />
        </div>
        <div className="single_icon">
          <img src="/instagram.svg" />
        </div>
        <div className="single_icon">
          <img src="/twitter.svg" />
        </div>
        <div className="single_icon">
          <img src="/linkedin.svg" />
        </div>
      </div>
      <div className="para_container">
        <p>© 2020 SCHOOLX - Online Learning</p>
      </div>
    </div>
  );
};
export default Footer;
