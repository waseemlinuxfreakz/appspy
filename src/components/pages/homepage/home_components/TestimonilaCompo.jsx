import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Avatar_1 from '../../../../assets/img/avatar/avatar (1).png';
import Avatar_2 from '../../../../assets/img/avatar/avatar (2).png';
import Avatar_3 from '../../../../assets/img/avatar/avatar (3).png';
import Avatar_4 from '../../../../assets/img/avatar/avatar (4).png';
import Avatar_5 from '../../../../assets/img/avatar/avatar (5).png';
import BlueStar from '../../../../assets/img/Icons/star-blue.svg';
import BlueFade from '../../../../assets/img/Icons/star-fade.svg';


// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

export default function TestiSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="SwiperContainer">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          type: "fraction",
        }}
        spaceBetween={10}
        navigation={true}
        // thumbs={{swiper: this.state.thumbsSwiper}}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="TestiAuthor"
      >
        <SwiperSlide>
          <div className="autoreBox">
            <h4 className="fz29">Kevin Lee</h4>
            <p className="fz25">March 18, 2021 via Facebook</p>
            <ul className="rating_box">
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueFade} /></li>
            </ul>
            <p className="fz25">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.
              Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
              Pellentesque rhoncus lectus sed posuere viverra. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="autoreBox">
            <h4 className="fz29">Kevin Lee</h4>
            <p className="fz25">March 18, 2021 via Facebook</p>
            <ul className="rating_box">
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueFade} /></li>
            </ul>
            <p className="fz25">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.
              Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
              Pellentesque rhoncus lectus sed posuere viverra. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="autoreBox">
            <h4 className="fz29">Kevin Lee</h4>
            <p className="fz25">March 18, 2021 via Facebook</p>
            <ul className="rating_box">
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueFade} /></li>
            </ul>
            <p className="fz25">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.
              Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
              Pellentesque rhoncus lectus sed posuere viverra. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="autoreBox">
            <h4 className="fz29">Kevin Lee</h4>
            <p className="fz25">March 18, 2021 via Facebook</p>
            <ul className="rating_box">
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueFade} /></li>
            </ul>
            <p className="fz25">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.
              Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
              Pellentesque rhoncus lectus sed posuere viverra. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="autoreBox">
            <h4 className="fz29">Kevin Lee</h4>
            <p className="fz25">March 18, 2021 via Facebook</p>
            <ul className="rating_box">
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueStar} /></li>
              <li><img src={BlueFade} /></li>
            </ul>
            <p className="fz25">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.
              Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
              Pellentesque rhoncus lectus sed posuere viverra. </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="TestiThumb"
      >
        <SwiperSlide>
          <img src={Avatar_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avatar_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avatar_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avatar_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avatar_5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
