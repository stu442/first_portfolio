import { motion, useScroll } from "framer-motion"
import Modal from "./Modal";

export default function Header() {
    const { scrollYProgress } = useScroll();

    return (
        <header className="flex flex-col items-center text-center mb-[19.5rem]">
            <motion.header className="fixed origin-left top-0 inset-x-0 h-2 z-10 bg-green" style={{ scaleX: scrollYProgress }} />
            <Profile />
            <Descripton />
        </header>
    )
}

function Profile() {
    return (
                <img
                src="img/profile.PNG"
                className="rounded-full"
                width={200}
                height={200}
                />

    )
}

function Descripton() {
    return (
        <section className="flex flex-col items-center">
            <p className="text-4xl font-bold mt-6 mb-2">
                <span>
                    안녕하세요. 프론트엔드 개발자
                    <span className="text-green"> 박민수</span>
                    입니다.
                </span>
            </p>
            <h2 className="text-2xl font-medium text-white/70 mb-10">더 빠르고 효율적인 성장을 추구합니다.</h2>
                <Modal>
                <Modal.Toggle>
                    <h2 className="text-xl font-medium text-blue-500 cursor-pointer">더 알아보기 &gt;</h2>
                </Modal.Toggle>
                <Modal.Contents>
                    <ProfileDetail />
                </Modal.Contents>
            </Modal>
        </section>
    )
}

function ProfileDetail() {

    const titleStyle = "text-lg font-medium my-4"
    const descriptionStyle = "mb-2 ml-4"

    return (
        <>
            <h2 className="text-xl font-bold mb-8">더 빠르고 효율적인 성장을 추구합니다.</h2>
            <span>
                <h3 className={titleStyle}>📌 협업 및 커뮤니케이션 능력</h3>
                    <p className={descriptionStyle}>- 팀 프로젝트 경험을 통해 <span className="text-green">git을 활용하고 효율적인 소통</span>을 할 수 있습니다.</p>
                <h3 className={titleStyle}>📌 개발 능력</h3>
                    <p className={descriptionStyle}>- 기획부터 배포까지의 전 과정을 경험하며 독립적으로 프로젝트를 수행할 수 있습니다.</p>
                    <p className={descriptionStyle}>- Supabase를 이용한 간단한 백엔드 기능을 구현할 수 있습니다.</p>
                    <p className={descriptionStyle}>- UI 구현부터 상태관리, 성능 최적화까지 <span className="text-green">프론트엔드 전반적인 역할</span>을 경험했습니다.</p>
                <h3 className={titleStyle}>📌 효율적인 개발</h3>
                    <p className={descriptionStyle}>- 새로운 도구 및 기술을 탐색하고 프로젝트에 적용하여 개발 생산성을 높입니다.</p>
                    <p className={descriptionStyle}>- 다양한 개발 도구를 조합하여 작업 효율성을 극대화하고, <span className="text-green">지속적인 개선</span>을 위해 노력합니다.</p>
                <h3 className={titleStyle}>📌 빠른 성장</h3>
                    <p className={descriptionStyle}>- 새로운 기술을 공부하는 것을 좋아하며, 도입에 앞서 필요성을 고민하고 타당성을 검토합니다.</p>
                    <p className={descriptionStyle}>- 쌓아온 경험과 지식을 <span className="text-green">문서화</span>하여 지속적인 학습과 단단한 성장을 추구합니다.</p>
            </span>
        </>
    )
}