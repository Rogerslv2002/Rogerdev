
export default function Card( {Icon,Titulo,Texto,LINK}){
    return(
        <div onClick={LINK} className=" flex flex-row rounded-xl place-items-center xs:gap-3 gap-10  px-6 py-3 border-2 border-solid border-lime-300 text-white
         hover:bg-lime-300 hover:text-black
        " >
            <span className=" text-6xl 2xl:text-8xl" >{Icon}</span>
            <span  className="   flex flex-col gap-2 xs:gap-1"> 
                <p className="  font-semibold text-2xl 2xl:text-5xl">{ Titulo}</p>
                <p className=" text-xl font-medium xs:text-base 2xl:text-3xl" >{Texto}</p>

            </span>
            

        </div>
    )
}