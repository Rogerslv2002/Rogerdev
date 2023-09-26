import Img from "/src/assets/img1.png"
import Img2 from "/src/assets/img2.png"
import Img3 from "/src/assets/img3.png"
import Img4 from "/src/assets/img4.png"
import Img5 from "/src/assets/img5.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import Projeto from '../Components/Projeto';


const Links = (url)=>{
  open(url, "_blank", "noreferrer");
}
export default function MeusProjetos(){
    return(
        <section id="Projetos" className=" w-full px-20 py-10  flex flex-col gap-10 md:px-5
        " >

            <h2 className=' text-center text-white  text-6xl font-bold'>
                Projetos
            </h2>

            <p className=' text-center text-white font-medium  text-xl xs:text-base '>Aqui estão alguns dos projetos open source nos quais estive<br className='  flex sm:hidden '/> envolvido como desenvolvedor full stack</p>

            <section>

            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      freeMode={true}
      
      loop={true}
      autoplay={{
        delay:1500,
        disableOnInteraction: true,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        
        250: {
          slidesPerView: 1,
          spaceBetween: 20,},
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[FreeMode,Autoplay ]}
    >
      <SwiperSlide> < Projeto LInk={()=>Links("https://dorf.vercel.app/  ")} Img={Img} Titulo={'Dorf'} Texto={'Um criador de formulários gratuito e de código aberto'} /></SwiperSlide>
      <SwiperSlide> < Projeto LInk={()=>Links(" https://p2p-org.github.io/p2p-wallet-web/mvvm/#/ ")} Img={Img2} Titulo={'P2P Wallet'} Texto={'Uma carteira Solana baseada em navegador de código aberto.'} /></SwiperSlide>
      <SwiperSlide> < Projeto LInk={()=>Links(" https://slug.vercel.app/ ")} Img={Img3} Titulo={'Sulg'} Texto={' Um encurtador de URL de código aberto desenvolvido com T3 Stack.'} /></SwiperSlide>
      <SwiperSlide> < Projeto LInk={()=>Links(" https://www.firefiles.app/ ")} Img={Img4} Titulo={'Firefiles'} Texto={'A alternativa de código aberto ao Dropbox.'} /></SwiperSlide>
      <SwiperSlide> < Projeto LInk={()=>Links("https://frappebooks.com/")} Img={Img5} Titulo={'Books'} Texto={"Software de contabilidade grátis" } /></SwiperSlide>


    </Swiper>
            
  
            </section>

        </section>
    )
}
