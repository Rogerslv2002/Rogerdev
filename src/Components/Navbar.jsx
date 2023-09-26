import Logo from '/src/assets/Logo.svg';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar(){

   const [nav, setNav] = useState(false);
     
   const handleNav = () => {
     setNav(!nav);};
   return(
       <nav className="grid justify-between w-full grid-flow-col place-items-center">
          <img className=' w-28' src={Logo} alt="" />
          <span className=' md:hidden'>
          <NavMenu/>

          </span>
             <span className='flex flex-row gap-5 md:hidden' >
           <button className=' border-solid border-white border-2 2xl:text-4xl text-white px-5 py-2.5 text-xl  font-semibold rounded-xl hover:bg-lime-300 hover:text-black '>Download CV</button>
           </span>

           <div onClick={handleNav} className='hidden md:block'>
         { <AiOutlineMenu className='text-white ' size={35} />}
         <span className={nav ? 'grid grid-flow-row justify-self-stretch fixed right-0 top-0 w-[50%] md:w-[65%] h-full border-r border-r-gray-900 bg-black/80  ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%]'}>
          <AiOutlineClose className='mt-5 mr-5 text-3xl text-center text-lime-300 justify-self-end'/>

          <NavMenu/>
          
          
      
          </span>
         </div>
       </nav>
   )
}

let NavMenu=()=>{
   return(
       <div className='flex flex-row gap-5 md:flex-col '>
          
           <a className='text-2xl font-semibold text-center text-white 2xl:text-4xl md:text-2xl hover:text-lime-300' href="#Sobre">Sobre</a>
           <a className='text-2xl font-semibold text-center text-white 2xl:text-4xl md:text-2xl hover:text-lime-300' href="#Serviços">Serviços</a>
           <a className='text-2xl font-semibold text-center text-white 2xl:text-4xl md:text-2xl hover:text-lime-300' href="#Projetos">Projetos</a>
           <a className='text-2xl font-semibold text-center text-white 2xl:text-4xl md:text-2xl hover:text-lime-300' href="#Contato">Contato</a>


       </div>
   )
}