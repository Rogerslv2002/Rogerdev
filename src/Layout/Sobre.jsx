
import Perfil from "/src/assets/roger.jpg"
import Perfil1 from "/src/assets/roger1.png"



export default function Sobre(){
    return(
        <section id="Sobre"  className="flex flex-row w-full px-20 py-10 gap-5 sm:px-5 place-items-center" >
              
        <section className="w-2/5  md:hidden">

            <img className=" h-[70%] rounded-xl border-4 border-solid border-lime-300 " src={Perfil} alt="" />
                
            </section>
        
            <section className="flex flex-col w-3/5 gap-8 sm:gap-5 md:w-full ">
                <h2 className="text-5xl font-bold text-center text-white 2xl:text-6xl" >Sobre min</h2>
                <span className=" hidden md:flex h-64  place-content-center ">
            
                <img className="  h-[90%] rounded-full border-4 border-solid border-lime-300 " src={Perfil1} alt="" />
                </span>

                <p className="text-2xl text-white  font-medium sm:text-base 2xl:text-4xl">

                Desenvolvedor Full Stack com vasta experiência em tecnologias como React.js, Next.js, Tailwind, Node.js, Nest.js, MongoDB e PostgreSQL, especializado na construção de APIs REST. Tenho uma paixão inabalável pelo desenvolvimento de aplicações web e sistemas. Além disso, trago consigo uma sólida experiência em contribuições para projetos open source, onde resolvo problemas, aprimoro funcionalidades e promovo o crescimento da comunidade.
                
                </p>
                <span className="flex justify-center " >

                <button className="px-5 text-2xl text-white border-2 py-2.5 font-semibold sm:text-xl  rounded-xl hover:bg-lime-300 hover:text-black "> Download CV</button>
                </span>

            </section>
            
        </section>
    )
}