import React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const Container: React.FC = () => {
    return (
        <div className="flex justify-between mx-3 md:mx-6 border-b">
            <div className="w-full flex items-start gap-2 mb-3">
                <Select>
                    <SelectTrigger className="flex md:p-2 md:text-2xl outline rounded bg-green-400 w-32 md:w-48">
                        <SelectValue placeholder="Display" />
                    </SelectTrigger>
                    <SelectContent className="w-36 md:w-48 flex flex-col justify-end items-center bg-green-300 opacity-80 rounded outline md:text-2xl">
                        <SelectItem value="Surah">Surah</SelectItem>
                        <SelectItem value="Juz">Juz</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-2 mb-3">
                <Select>
                    <SelectTrigger className="flex md:p-2 md:text-2xl outline rounded bg-green-400 w-32 md:w-48">
                        <SelectValue placeholder="Order" />
                    </SelectTrigger>
                    <SelectContent className="w-36 md:w-48 flex flex-col justify-end items-center bg-green-300 opacity-80 rounded outline md:text-5xl">
                        <SelectItem value="Ascending">Ascending</SelectItem>
                        <SelectItem value="Descending">Descending</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default Container
