import Carousel from "react-multi-carousel";
import ReactStars from "react-stars";

const PopularComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="popular_main_container">
      {/* title */}
      <div className="title">
        <h3>Popular on school X</h3>
      </div>
      <Carousel responsive={responsive}>
        {/* box1 */}
        <div className="box_container">
          <div className="box_inside_container">
            {/* image */}
            <div>
              <img src="https://via.placeholder.com/80" width="100%" />
            </div>
            {/* content */}
            <div className="box_content-container">
              <div className="flex justify-between">
                <h4>Methemathics(AS) Crash Course</h4>
                <div className="bookmark_img">
                  <img src="/bookmark-24px.svg" />
                </div>
              </div>
              <div className="paragraph">
                <p>Tayyaba zaheer kayani</p>
              </div>
              <div className="starts_rating_container flex items-center">
                <div>
                  <h4>4.5</h4>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <h5 className="price">Rs. 4,590</h5>
                <del className="deleted_text">
                  <h5>9,535</h5>
                </del>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="box_container">
          <div className="box_inside_container">
            {/* image */}
            <div>
              <img src="https://via.placeholder.com/80" width="100%" />
            </div>
            {/* content */}
            <div className="box_content-container">
              <div className="flex justify-between">
                <h4>Methemathics(AS) Crash Course</h4>
              </div>
              <div className="paragraph">
                <p>Tayyaba zaheer kayani</p>
              </div>
              <div className="starts_rating_container flex items-center">
                <div>
                  <h4>4.5</h4>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <h5 className="price">Rs. 4,590</h5>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="box_container">
          <div className="box_inside_container">
            {/* image */}
            <div>
              <img src="https://via.placeholder.com/80" width="100%" />
            </div>
            {/* content */}
            <div className="box_content-container">
              <div className="flex justify-between">
                <h4>Methemathics(AS) Crash Course</h4>
              </div>
              <div className="paragraph">
                <p>Tayyaba zaheer kayani</p>
              </div>
              <div className="starts_rating_container flex items-center">
                <div>
                  <h4>4.5</h4>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <h5 className="price">Rs. 4,590</h5>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default PopularComponent;
