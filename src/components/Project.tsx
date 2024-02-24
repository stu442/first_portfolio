import { motion } from "framer-motion"

interface ProjectData {
    index: number
    title: string
    description: string
    homepage: string | null
    github: string
}

export default function Project() {

    const projects = [
        {
            title: "BeatSpot",
            description: "음악 애호가들의 음악 디깅 공간",
            homepage: "https://main--beatspot.netlify.app/",
            github: "https://github.com/stu442/pre_music"
        },
        {
            title: "Distraction Detox",
            description: "집중을 방해하는 웹페이지 차단을 위한 크롬 익스텐션",
            homepage: "https://chromewebstore.google.com/detail/distraction-detox/goidliaanolbemdkllfnoolafeildiji?hl=ko",
            github: "https://github.com/stu442/Distraction_Detox"
        },
        {
            title: "저기어때",
            description: "여기어때를 클론코딩한 프로젝트",
            homepage: null,
            github: "https://github.com/jugiaddae-front/master"
        }
    ];
    

    return (
        <section className="flex flex-col items-center font-bold my-12">
            <h2 className="text-4xl my-10">프로젝트</h2>
            <div className="">
                {projects.map((data, index) => (
                    <ProjectCard key={index} index={index} title={data.title} description={data.description} homepage={data?.homepage} github={data.github} />
                ))}
            </div>
        </section>
    )
}

function ProjectCard({index, title, description, homepage, github} : ProjectData) {
    return (
        <div className="text-center my-12 w-3/4 mx-auto">
            <motion.img 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                src={`img/project_${index}.png`} 
                alt="프로젝트 사진"
                className="rounded-xl my-4 object-cover cursor-pointer"
            />
            <div>
                <h3 className="text-3xl my-2">{title}</h3>
                <h4 className="text-lg font-medium text-white/70">{description}</h4>
            </div>
            <div className={`flex ${homepage ? "sm:justify-between lg:justify-center lg:gap-20" : "sm:justify-center"} justify-center my-8`}>
                {homepage && <a href={homepage} target="_blank"><button className="bg-green px-12 py-4 rounded-xl">홈페이지</button></a>}
                <a href={github} target="_blank">
                    <button className="flex gap-2 justify-center bg-gray-600 px-12 py-4 rounded-xl">
                        <img className="w-6" src="img/github.svg" />
                        <span>Github</span>
                    </button>
                </a>
            </div>
        </div>
    )
}
