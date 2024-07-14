import React from "react"

interface CardProps {
    surahName: string,
    nameTranslation: string,
    revealedIn: string,
    numberOfAyahs: number
}

const Card: React.FC<CardProps> = (props) => {
    const { surahName, nameTranslation, revealedIn, numberOfAyahs } = props
    return (
        <a
            className="w-80 md:w-[292px] h-16 md:h-20 bg-green-200 hover:bg-white outline outline-green-400 flex justify-center items-center p-5 shadow rounded transition duration-300"
            href={surahName}
        >
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-start gap-1">
                    <h2 className="font-bold text-[14px] leading-loose">{surahName}</h2>
                    <h2 className="font-thin text-[14px] leading-loose truncate">({nameTranslation})</h2>
                </div>
                <div className="flex justify-center items-center gap-1 opacity-50">
                    <h2 className="font-thin">{revealedIn}</h2>
                    <p>•</p>
                    <h2 className="font-thin">{numberOfAyahs} ayah</h2>
                </div>
            </div>
        </a>
    )
}

export default Card
