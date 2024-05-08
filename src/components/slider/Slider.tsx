import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slick from "react-slick";

interface SliderProps {
  children: React.ReactNode;
}

const Slider = ({ children }: SliderProps) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return <Slick {...settings}>{children}</Slick>;
};

export default Slider;
