import Deteeils from "../Components/Details";

export default function Faq(){
    return(

        <section className=" w-full px-20 py-10 flex flex-col gap-10 md:px-5">

            <h2 className=" text-white text-5xl font-semibold text-center">Perguntas Frequentes</h2>

            <div className=" flex-col flex gap-8 px-32 md:px-10 xs:px-0">
                <Deteeils/>
                <Deteeils/>
                <Deteeils/>
                <Deteeils/>
                

            </div>

        </section>
    )
}