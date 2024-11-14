import React from "react";
import "./appInterface.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import Slider1 from "../../assets/images/slider1.png";
import Slider2 from "../../assets/images/slider2.png";
import Slider3 from "../../assets/images/slider3.png";
import Slider4 from "../../assets/images/slider4.png";
import Slider5 from "../../assets/images/slider5.png";

const AppInterface = () => {
  return (
    <section className="app-interface">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Checkout Our App Interface Look</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            <Swiper
              spaceBetween={10}
              navigation={true}
              slidesPerView={4}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <img src={Slider1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slider2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slider3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slider4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slider5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInterface;
