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
        "웹 프레임워크": ["React", "Nextjs"],
        "상태관리": ["Recoil", "Jotai"],
        "UI": ["Tailwind", "Shadcn"],
        "디자인": ["Figma"],
        "백엔드": ["Supabase"]
    };

    const usedData = {
        "언어": ["Python"],
        "모바일 프레임워크": ["Flutter"],
        "백엔드": ["Firebase"]
    };

    return (
        <section className="flex flex-col items-center font-bold">
            <h2 className="text-4xl my-14">기술 스택</h2>
            <StackList stackData={deployData} description="이 기술로 배포까지 경험해봤어요!" />
            <StackList stackData={usedData} description="사용해 본 적 있어요!" />
        </section>
    );
}

function StackList({ stackData, description }: StackListProps) {
    return (
        <section>
            <h3 className="text-xl text-green text-center my-8">{description}</h3>
            <div className="grid grid-cols-3 gap-4">
                {Object.entries(stackData).map(([category, stacks]) => (
                    <StackCard key={category} category={category} stacks={stacks} />
                ))}
            </div>
        </section>
    );
}

function StackCard({ category, stacks }: StackCardProps) {
    return (
        <div className="flex flex-col items-center justify-center" key={category}>
            <h3 className="text-2xl font-bold">{category}</h3>
            <div className="flex flex-wrap justify-center">
                {stacks.map(stack => (
                    <div className="flex flex-col items-center gap-4 mx-4 my-4" key={stack}>
                        <img src={`src/icons/${stack}.svg`} alt={stack} className="w-20 h-20"/>
                        <span>{stack}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
