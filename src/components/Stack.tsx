import { motion } from "framer-motion";

interface StackCardProps {
    category: string;
    stacks: string[];
}

interface StackListProps {
    stackData: StackData;
    description: string;
}

interface StackData {
    [key: string]: string[]
}

export default function Stack() {
    const deployData = {
        "언어": ["Javascript", "Typescript"],
        "프레임워크": ["React", "Nextjs"],
        "상태관리": ["Recoil", "Jotai"],
        "UI": ["Tailwind", "Shadcn"],
        "디자인": ["Figma"],
        "백엔드": ["Supabase"]
    };

    const usedData = {
        "언어": ["Python"],
        "백엔드": ["Firebase"]
    };

    return (
        <section className="flex flex-col-reverse items-center font-bold mb-80">
            <StackList stackData={usedData} description="사용해 본 적 있어요!" />
            <StackList stackData={deployData} description="이 기술로 배포까지 경험해봤어요!" />
            <h2 className="text-4xl my-14">기술 스택</h2>
        </section>
    );
}

function StackList({ stackData, description }: StackListProps) {

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.6 }}
        >
            <h3 className="text-xl text-green text-center my-8">{description}</h3>
            <div className={`grid ${Object.keys(stackData).length > 3 ? "grid-cols-3" : "grid-cols-2"} gap-4 items-start`}>
                {Object.entries(stackData).map(([category, stacks]) => (
                    <StackCard key={category} category={category} stacks={stacks} />
                ))}
            </div>
        </motion.section>
    );
}

function StackCard({ category, stacks }: StackCardProps) {
    return (
        <div className="flex flex-col items-center justify-center" key={category}>
            <h3 className="text-2xl font-bold">{category}</h3>
            <div className="flex flex-wrap justify-center">
                {stacks.map(stack => (
                    <div className="flex flex-col items-center gap-4 mx-4 my-4" key={stack}>
                        <img src={`img/${stack}.svg`} alt={stack} className="w-20 h-20"/>
                        <span>{stack}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
