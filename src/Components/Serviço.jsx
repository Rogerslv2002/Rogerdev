

export default function Serviço ({Icon,Titulo,Texto}){
    return(
        <section className=" w-full  flex flex-col gap-5 p-5">

            <span className=" grid  place-items-center text-center text-lime-300  text-7xl 2xl:text-8xl ">{Icon}</span>
            <h3 className=" text-white text-2xl  text-center font-semibold 2xl:text-5xl">{Titulo}</h3>
            <p className=" text-xl text-center    text-white xs:text-base 2xl:text-3xl" >{Texto}</p>

        </section>

    )
}
