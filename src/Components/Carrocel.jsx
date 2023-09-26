import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Carrocel({Dire,Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7,Slide8,Slide9,Slide10,Slide11,Slide12}) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
      freeMode={true}
      dir={Dire}
      loop={true}
      autoplay={{
        delay:1500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        
        250: {
          slidesPerView: 2,
          spaceBetween: 20,},
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      modules={[FreeMode,Autoplay ]}
    >
      <SwiperSlide>{Slide1}</SwiperSlide>
      <SwiperSlide>{Slide2}</SwiperSlide>
      <SwiperSlide>{Slide3}</SwiperSlide>
      <SwiperSlide>{Slide4}</SwiperSlide>
      <SwiperSlide>{Slide5}</SwiperSlide>
      <SwiperSlide>{Slide6}</SwiperSlide>
      <SwiperSlide>{Slide7}</SwiperSlide>
      <SwiperSlide>{Slide8}</SwiperSlide>
      <SwiperSlide>{Slide9}</SwiperSlide>
      <SwiperSlide>{Slide10}</SwiperSlide>
      <SwiperSlide>{Slide11}</SwiperSlide>
      <SwiperSlide>{Slide12}</SwiperSlide>
      
   
   
      ...
    </Swiper>
  );
};