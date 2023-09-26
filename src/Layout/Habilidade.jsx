import { FaJs, FaNode, FaReact, FaSass } from "react-icons/fa";
import { SiAdonisjs, SiAstro, SiBun, SiDocker, SiExpress, SiFirebase, SiKubernetes, SiMongodb, SiNestjs, SiNextdotjs, SiPreact, SiPrisma, SiRemix, SiSequelize, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoGit, BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RxStitchesLogo} from "react-icons/rx";




import Carrocel from "../Components/Carrocel";
import Skills from "../Components/skills";


export default function Habilidade() {
    return(
        <section className="w-full px-5 py-10" >
            <h2 className="text-5xl font-semibold text-center text-white pb-14" >
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
                 Slide5={<Skills Icon={<FaSass/>} Texto={"Sass"}/>}
                 Slide6={<Skills Icon={<SiTailwindcss/>} Texto={'Tailwindcss'} />}
                 Slide7={<Skills Icon={<RxStitchesLogo/>} Texto={'Stitches'} />}
                 Slide8={<Skills Icon={<BiLogoRedux/>} Texto={'Rudux'} />}
                 Slide9={<Skills Icon={<BiLogoGit/> } Texto={'Git'}/>}
                 Slide10={<Skills Icon={<AiFillGithub/>}  Texto={'Github'} />}
                 Slide11={<Skills Icon={<SiAstro/>} Texto={'Astro'} />}
                 Slide12={<Skills Icon={<SiNextdotjs/>} Texto={'Nextd'} />} 
              


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
                 Slide7={<Skills Icon={<SiSequelize/>} Texto={'Sisquelize'} />}
                 Slide6={<Skills Icon={<SiMongodb/>} Texto={'MongoDB'} />}
                 Slide5={<Skills Icon={<BiLogoPostgresql/>} Texto={'Postgresql'} />}
                 Slide4={<Skills Icon={<SiSupabase/> } Texto={'Supabase'}/>}
                 Slide3={<Skills Icon={<SiFirebase/>}  Texto={'Firebase'} />}
                 Slide2={<Skills Icon={<SiDocker/>} Texto={'Doker'} />}
                 Slide1={<Skills Icon={<SiKubernetes/>} Texto={'Kubernetes'} />} 
              
                
                 />
             </div>
             </div>
            

        </section>
    )
}
