
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Navbar from "../Components/Navbar";
const Links = (url)=>{
    open(url, "_blank", "noreferrer");
}

export default function Hero(){
  
    return(
       
        <section className="w-full px-20 py-10 md:px-5">

            <Navbar/>


            <section className="flex flex-col w-full gap-10 pt-10">
                 <h2 className="font-semibold text-center text-white text-7xl md:text-5xl sm:text-5xl xs:text-[43px]">Desenvolvedor<br/> <span className=" text-lime-300">Full Stack</span> </h2>
                 <p className="text-2xl font-medium text-center text-white md:text-base  ">Desenvolvimento Full Stack - Criação de Websites Responsivos, Lojas Virtuais, Aplicativos Web,<br className=" flex md:hidden "/> (Web App), Progressive Web App (PWA), Sistemas e Configuração de Campanhas de Email Marketing.</p>
                 <div className="flex justify-center gap-5 text-xl text-white sm:flex-col">
                    <button onClick={()=>Links("https://wa.me/5514998635958")} className="px-5 text-2xl border-2 py-2.5 font-semibold  sm:text-xl rounded-xl hover:bg-lime-300 hover:text-black "> Whatsapp</button>
                    <button onClick={()=>Links("https://cal.com/roger-silva-r432f5/reuni-o-com-roger-silva")}  className="px-5 text-2xl border-2 py-2.5 font-semibold sm:text-xl  rounded-xl hover:bg-lime-300 hover:text-black ">  Reunião</button>
                 </div>
                 <span className="flex flex-wrap justify-center gap-5 px-10 ">
                
                 <FaInstagram  onClick={()=>Links("https://www.instagram.com/roger.sl.1/")}  className="text-4xl text-white hover:text-lime-300 " />
                 <FaLinkedin  onClick={()=>Links("https://www.linkedin.com/in/roger-silva-8590b7261/")} className="text-4xl text-white hover:text-lime-300 " />
                 <FaDiscord onClick={()=>Links("")} className="text-4xl text-white hover:text-lime-300 " />
                 < FaTwitter  onClick={()=>Links("")} className="text-4xl text-white hover:text-lime-300 " />
                 < FaGithub onClick={()=>Links("https://github.com/Rogerslv2002")} className="text-4xl text-white hover:text-lime-300 " />
                    
                    
                 </span>
                 
            </section>

        </section>

    )
}