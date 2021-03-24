const Header = () => {
  return (
    <div className="header_container flex justify-between">
      {/* left side */}
      <div className="flex items-center">
        <img src="/Logo.svg" />
      </div>
      {/* right side */}
      <div className="flex items-center right_side">
        {/* cart */}
        <div className="flex items-center">
          <img src="/shopping_cart-24px.svg" />
        </div>
        {/* file */}
        <div className="flex items-center file_icon_container">
          <img src="/Three-bar.svg" />
        </div>
      </div>
    </div>
  );
};
export default Header;
