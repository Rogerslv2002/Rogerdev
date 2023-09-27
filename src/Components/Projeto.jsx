

export default  function Projeto({LInk,Img,Titulo, Texto}){
    return(
        <div  className=" w-full  bg-black border-2 border-lime-300 border-solid rounded-xl "> 
            <span className=" w-full rounded-xl">
                <img className=" rounded-xl" src={Img} alt="" />

            </span>
            <span className=" flex  2xl:h-72 2xl:justify-between   flex-col gap-4 py-5  mx-5">
                <h3 className=" text-white text-center font-semibold text-4xl 2xl:text-5xl">{Titulo}</h3>
              
            <p className="  text-white text-lg text-center 2xl:text-2xl">{Texto}</p>

                 <button onClick={LInk} className="px-5 text-2xl 2xl:text-4xl border-2 py-2.5 text-white  font-semibold  sm:text-xl rounded-xl hover:bg-lime-300 hover:text-black "> Website</button>

            </span>

        </div>
    )
}