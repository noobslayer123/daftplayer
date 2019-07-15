import React from 'react';
import Slider from 'react-slick';
import mainCover from '../../images/unreleased_cover.png';
import secondCover from '../../images/cover.png';
import thirdCover from '../../images/cover-1.png';

export default function PicSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={mainCover} alt="Main cover" />
      </div>
      <div className="slide">
        <img src={secondCover} alt="2nd cover" />
      </div>
      <div className="slide">
        <img src={thirdCover} alt="3rd cover" />
      </div>
    </Slider>
  );
}
