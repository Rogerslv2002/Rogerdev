

export default  function Projeto({LInk,Img,Titulo, Texto}){
    return(
        <div  className=" w-full bg-black border-2 border-lime-300 border-solid rounded-xl "> 
            <span className=" w-full rounded-xl">
                <img className=" rounded-xl" src={Img} alt="" />

            </span>
            <span className=" flex  flex-col gap-4 py-5  mx-5">
                <h3 className=" text-white text-center font-semibold text-4xl">{Titulo}</h3>
              
            <p className="  text-white text-lg text-center">{Texto}</p>

                 <button onClick={LInk} className="px-5 text-2xl border-2 py-2.5 text-white  font-semibold  sm:text-xl rounded-xl hover:bg-lime-300 hover:text-black "> Website</button>

            </span>

        </div>
    )
}