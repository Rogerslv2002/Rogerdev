import Serviço from "../Components/Serviço";
import { BiCodeAlt } from "react-icons/bi";


export default function Serviços (){
    return(
        <section id="Serviços" className=" w-full px-20 py-10 flex flex-col gap-10 md:px-5 ">
            <h2 className=" text-center  text-white text-5xl font-bold ">Meus Serviços</h2>
            <p></p>

            <section className=" flex flex-row gap-5 divide-x-4 divide-lime-300 sm:flex-col sm:divide-y-2 sm:divide-x-0" >
                <Serviço
                Icon={<BiCodeAlt/>}
                Titulo={'Front End'}
                Texto={'Desenvolvemos sites, landing pages e E-Commerce profissionais que asseguram uma experiência incrível para os usuários. Além disso, fornecemos serviços de manutenção de código, correção de bugs e aprimoramento de layout e interfaces com a implementação de novas funcionalidad'}
                />
                   <Serviço
                Icon={<BiCodeAlt/>}
                Titulo={'Back End'}
                Texto={'Desenvolvemos APIs RESTful e GraphQL poderosas e escaláveis para facilitar a comunicação eficiente entre o frontend e o backend. Além disso, ofereço o serviços de integração de sistemas para conectar seus sistemas e aplicativos existentes, permitindo que compartilhem dados e operem de maneira integrada e harmoniosa.'}
                />
                
            </section>

        </section>
    )
}