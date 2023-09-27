import { FaJs, FaNode, FaReact, } from "react-icons/fa";
import {  SiAnsible, SiAstro, SiAxios, SiBun, SiCypress, SiDocker, SiExpress,  SiMongodb, SiNestjs, SiNextdotjs, SiNginx, SiPreact, SiPrisma, SiRedis, SiStorybook, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoGit, BiLogoPostgresql,  } from "react-icons/bi";
import { RxStitchesLogo} from "react-icons/rx";




import Carrocel from "../Components/Carrocel";
import Skills from "../Components/skills";


export default function Habilidade() {
    return(
        <section className="w-full px-5 py-10" >
            <h2 className="text-5xl 2xl:text-7xl font-semibold text-center text-white pb-14" >
                Minhas Habilidades

            </h2>
<div className=" flex flex-col gap-5" >


            <div >
                <Carrocel
                Dire={false}
    
                 Slide1={<Skills Icon={<FaJs/>} Texto={"JavaScript"}/>}
                 Slide2={<Skills Icon={<SiTypescript/>} Texto={'TypeScript'} />}
                 Slide3={<Skills Icon={<FaReact/> } Texto={'React'}/>}
                 Slide4={<Skills Icon={<SiPreact/>}  Texto={'Preact'} />}
                 Slide5={<Skills Icon={<SiAxios/>} Texto={"Axios"}/>}
                 Slide6={<Skills Icon={<SiTailwindcss/>} Texto={'Tailwindcss'} />}
                 Slide7={<Skills Icon={<RxStitchesLogo/>} Texto={'Stitches'} />}
                 Slide8={<Skills Icon={<SiCypress/>} Texto={'Cypress'} />}
                 Slide9={<Skills Icon={<BiLogoGit/> } Texto={'Git'}/>}
                 Slide10={<Skills Icon={<SiStorybook/>}  Texto={'Storybook'} />}
                 Slide11={<Skills Icon={<SiAstro/>} Texto={'Astro'} />}
                 Slide12={<Skills Icon={<SiNextdotjs/>} Texto={'Next'} />} 
              


                 />
             </div>

             <div>

                <Carrocel
                Dire={'rtl'}
                
                Slide12={<Skills Icon={<FaNode/>} Texto={"Node"}/>}
                Slide11={<Skills Icon={<SiBun/>} Texto={'Bun'} />}
                 Slide10={<Skills Icon={<SiExpress/> } Texto={'Express '}/>}
                 Slide9={<Skills Icon={< SiNestjs/>}  Texto={'Nest'} />}
                 Slide8={<Skills Icon={<SiPrisma/>} Texto={"Prisma"}/>}
                 Slide7={<Skills Icon={<SiRedis/>} Texto={'Redis'} />}
                 Slide6={<Skills Icon={<SiMongodb/>} Texto={'MongoDB'} />}
                 Slide5={<Skills Icon={<BiLogoPostgresql/>} Texto={'Postgresql'} />}
                 Slide4={<Skills Icon={<SiSupabase/> } Texto={'Supabase'}/>}
                 Slide3={<Skills Icon={<SiNginx/>}  Texto={'Nginx'} />}
                 Slide2={<Skills Icon={<SiDocker/>} Texto={'Doker'} />}
                 Slide1={<Skills Icon={<SiAnsible/>} Texto={'Ansible'} />} 
              
                
                 />
             </div>
             </div>
            

        </section>
    )
}
