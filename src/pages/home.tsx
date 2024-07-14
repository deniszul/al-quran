import React, { useState, useEffect } from "react"; 0

import Container from "@/components/container"
import Navbar from "@/components/navbar";
import ListCard from "@/components/listCard";
import Card from "@/components/card";

interface Surah {
    code: number,
    status: string,
    data: [{
        number: number,
        name: string,
        englishName: string,
        englishNameTranslation: string,
        revelationType: 'Meccan' | 'Medinan' | string,
        numberOfAyahs: number,
        ayahs: [
            {
                number: number,
                text: string,
                numberInSurah: number,
                juz: number,
                manzil: number,
                page: number,
                ruku: number,
                hizbQuarter: number,
                sajda: boolean
            }
        ]
    }]
}

const Home: React.FC = () => {
    const [data, setData] = useState<Surah>()

    const fetchingData = async () => {
        try {
            const response = await fetch(`${import.meta.env.API_URL}/surah`, {
                method: 'GET'
            })

            setData(await response.json())
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <>
            <Navbar />
            <div className="w-full bg-green-50 py-3 md:py-6">
                <Container />
                <ListCard>
                    {data?.data.map((surah) => {
                        <Card
                            surahName={surah.englishName}
                            nameTranslation={surah.englishNameTranslation}
                            revealedIn={surah.revelationType}
                            numberOfAyahs={surah.numberOfAyahs}
                        />
                    })}
                </ListCard>
            </div>
        </>
    )
}

export default Home
