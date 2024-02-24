import { motion, useScroll } from "framer-motion"

export default function Header() {
    const { scrollYProgress } = useScroll();

    return (
        <header className="flex flex-col items-center">
            <motion.header className="fixed origin-left top-0 inset-x-0 h-2 bg-green" style={{ scaleX: scrollYProgress }} />
            <Profile />
            <Descripton />
        </header>
    )
}

function Profile() {
    return (
        <img
        src="src/img/profile.PNG"
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
            <h2 className="text-2xl font-medium text-white/70">더 빠르고 효율적인 성장을 추구합니다.</h2>
        </section>
    )
}