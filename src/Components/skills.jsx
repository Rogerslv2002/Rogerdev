

export default function Skills({Icon,Texto}){
    return(
        <div className="   flex flex-col place-items-center rounded-2xl gap-3 p-5 border-2 border-lime-300">
            <span className="text-6xl xs:text-4xl  text-white">{Icon}</span>
            <h3 className="text-3xl xs:text-2xl font-semibold text-center  text-white">{Texto}</h3>
        </div>
        )
}