import { AiFillLinkedin, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import Card from "../Components/Card";

const Links = (url)=>{
    open(url, "_blank", "noreferrer");
}
export default function Contatos(){
    return(
        <section id="Contato" className=" w-full px-20 py-10 md:px-5 ">
            <h2 className=" text-center text-white my-5 text-5xl font-semibold"> Contatos</h2>
            <p className=" text-center text-white text-xl mb-10 font-medium">Entre em contato comigo!</p>
            <section className=" grid grid-cols-2 gap-8 px-48 sm:grid-cols-1 md:px-0  pb-20 border-b-2 border-b-lime-300">

            <Card LINK={()=>Links("https://wa.me/5514998635958")} Icon={<AiOutlineWhatsApp/>} Titulo={"Whatsapp"} Texto={'14 99863-5958'}/>
            < Card LINK={()=>Links("https://roger.slv@hotmail.com")} Icon={<AiOutlineMail/>} Titulo={"Email"} Texto={'Roger.slv@hotmail.com'}/>
            < Card LINK={()=>Links("https://www.instagram.com/roger.sl.1/")} Icon={<AiOutlineInstagram/>} Titulo={"Instagram"} Texto={'Roger.sl.dev'}/>
            < Card LINK={()=>Links("https://www.linkedin.com/in/roger-silva-8590b7261/")} Icon={<AiFillLinkedin/>} Titulo={"Linkdin"} Texto={'Roger Silva'}/>
            
               

                
            </section>

            <p className=" text-white text-center  text-xl mt-10">© Roger Silva (@deverebor) 2023 - Todos os direitos reservados.</p>

        </section>
    )
}