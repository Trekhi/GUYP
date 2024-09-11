import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardIcons from '../cards/Card-icons';

import { faHome, faLeaf, faCog, faAtom } from "@fortawesome/free-solid-svg-icons"; // Iconos

import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        arrows: false,
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        arrows: false,
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{marginTop:'10px'}} className="slider-container">
      <Slider {...settings}>
        <div>
          <CardIcons icon={faCog}/>
        </div>
        <div>
          <CardIcons icon={faLeaf}/>
        </div>
        <div>
          <CardIcons icon={faHome}/>
        </div>
        <div>
          <CardIcons icon={faAtom}/>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;