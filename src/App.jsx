
import Contatos from "./Layout/Contatos";
import Habilidade from "./Layout/Habilidade";
import Hero from "./Layout/Hero";
import MeusProjetos from "./Layout/MeusProjetos";
import Serviços from "./Layout/Serviços";
import Sobre from "./Layout/Sobre";


export default function App(){
  return(
    <>
    <Hero/>
    <Sobre/>
    <Habilidade/>
    <Serviços/>
    <MeusProjetos/>
    <Contatos/>
    </>
  )
}