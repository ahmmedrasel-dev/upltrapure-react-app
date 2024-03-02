import { Swiper, SwiperSlide } from "swiper/react";
import wsp from "../../../assets/images/wsp.jpeg";
import ro from "../../../assets/images/ro.jpeg";
import eog from "../../../assets/images/eog.jpeg";
import slider3 from "../../../assets/images/slider3.jpg";
import { FaRegCheckSquare } from "react-icons/fa";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Slide as SlAni } from "react-reveal";

const Slide = () => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={800}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-content">
            <img src={wsp} className="w-full h-[600px]" alt="" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2">
              <div className="text-center flex gap-4 flex-col items-center slider-inside-content">
                <SlAni top>
                  <h2 className="text-xl lg:text-3xl text-white text-center mb-0">
                    Water Treatment Plant (WTP)
                  </h2>
                  <small className="text-white text-sm py-0 my-0">
                    Water Softener Plant, Iron Remover Plant
                  </small>
                </SlAni>

                <SlAni button duration="2000">
                  <button className="btn z-50 border-0 bg-warning text-white hover:bg-primary lg:w-44 ">
                    Lern More
                  </button>
                </SlAni>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-content">
            <img src={slider3} className="w-full h-[600px]" alt="" />
            <div className="absolute top-[32%] left-[50%] -translate-x-1/2">
              <div className="text-center flex gap-4 flex-col items-center slider-inside-content">
                <SlAni top>
                  <h2 className="text-xl lg:text-3xl text-white text-center">
                    Water Treatment Media
                  </h2>
                </SlAni>

                <SlAni>
                  <ul className="flex flex-wrap gap-3 w-[540px]">
                    <li className="text-left text-white flex items-center gap-2 font-medium">
                      <FaRegCheckSquare />
                      Ion Exchange Resin
                    </li>
                    <li className="text-left text-white flex items-center gap-2 font-medium">
                      <FaRegCheckSquare />
                      Activated Carbon
                    </li>
                    <li className="text-left text-white flex items-center gap-2 font-medium">
                      <FaRegCheckSquare />
                      Anthracite{" "}
                    </li>
                    <li className="text-left text-white flex items-center gap-2 font-medium">
                      <FaRegCheckSquare />
                      Manganese Di-Oxide
                    </li>
                    <li className="text-left text-white flex items-center gap-2 font-medium">
                      <FaRegCheckSquare />
                      Sand & Gravels
                    </li>
                  </ul>
                </SlAni>

                <SlAni button duration="2000">
                  <button className="btn z-50 border-0 bg-warning text-white hover:bg-primary lg:w-32 ">
                    Lern More
                  </button>
                </SlAni>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <img src={ro} className="w-full h-[600px]" alt="" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2">
              <div className="text-center flex gap-4 flex-col items-center slider-inside-content">
                <SlAni right>
                  <h2 className="text-xl lg:text-3xl text-white text-center">
                    Reverse Osmosis Plant{" "}
                  </h2>
                </SlAni>
                <SlAni left duration="2000">
                  <button className="btn z-50 border-0 bg-warning text-white hover:bg-primary lg:w-32 ">
                    Lern More
                  </button>
                </SlAni>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content" data-swiper-parallax="-300">
            <img src={eog} className="w-full h-[600px]" alt="" />

            <div className="absolute top-[40%] left-[50%] -translate-x-1/2">
              <div className="flex gap-4 flex-col items-center slider-inside-content">
                <SlAni left>
                  <h2 className="text-xl lg:text-3xl text-white text-center">
                    Effluent Treatment Plant
                  </h2>
                </SlAni>

                <SlAni right duration="2000">
                  <button className="btn z-50 border-0 bg-warning text-white hover:bg-primary lg:w-32 ">
                    Lern More
                  </button>
                </SlAni>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="slider-content" data-swiper-parallax="-300">
            <img src={construction} className="w-full h-[600px]" alt="" />

            <div className="absolute top-[20%] left-[50%] -translate-x-1/2">
              <div className="flex gap-8 flex-col items-center slider-inside-content">
                <SlAni left>
                  <h2 className="text-2xl text-warning font-bold lg:text-5xl  text-center">
                    We are Working Our Website
                  </h2>

                  <p className="text-white text-center font-semibold">
                    We apologize for any inconvenience caused by the current
                    state of our website. We are currently working on some
                    updates and improvements to enhance your browsing
                    experience.
                    <br />
                    Please bear with us as we strive to make our website more
                    user-friendly and functional. We will do our best to
                    complete the updates as soon as possible.
                    <br />
                    Thank you for your patience and understanding. Please feel
                    free to contact us if you have any questions or concerns.
                  </p>
                </SlAni>

                <SlAni right duration="2000">
                  <button className="btn border-0 bg-warning text-white hover:bg-primary lg:w-56 ">
                    Call: +8801860629988
                  </button>
                </SlAni>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        <div className="swiper-button-next slide_next_btn bg-pure">
          <FaAngleRight className="text-primary hover:text-[#3c65f5] text-2xl duration-200" />
        </div>
        <div className="swiper-button-prev slide_prev_btn bg-pure">
          <FaAngleLeft className="text-primary hover:text-[#3c65f5] text-2xl duration-200 " />
        </div>
      </Swiper>
    </>
  );
};

export default Slide;
